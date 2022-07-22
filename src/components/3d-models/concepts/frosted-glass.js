import * as React from 'react';
import { Vector2, RGBFormat, LinearFilter, WebGLRenderTarget } from 'three';
import { useFrame, useThree, extend } from 'react-three-fiber';
import mergeRefs from 'react-merge-refs';
import { GlassMaterial } from './glass-material';

extend({ GlassMaterial })

const MIPMAP_NUM = 8

export const Glass = React.forwardRef(
  ({ mixBlur = 0.0, mixStrength = 0.5, resolution = 256, geo, mirror, children, distortion = 1, distortionMap, ...props }, ref) => {
    const { size, gl, scene, camera } = useThree()
    const meshRef = React.useRef()
    const [renderTargets] = React.useState(() => {
      const renderTargets = []
      const pars = {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBFormat,
        encoding: gl.outputEncoding
      }
      for (let i = 0; i < MIPMAP_NUM; i++) {
        const res = Math.max(8, Math.round(resolution / Math.pow(2, i)))
        const renderTarget = new WebGLRenderTarget(res, res, pars)
        renderTarget.texture.generateMipmaps = false
        renderTargets.push(renderTarget)
      }
      return renderTargets
    })

    const [fbo1, reflectorProps] = React.useMemo(() => {
      const parameters = {
        minFilter: LinearFilter,
        magFilter: LinearFilter,
        format: RGBFormat,
        encoding: gl.outputEncoding
      }
      const fbo1 = new WebGLRenderTarget(resolution, resolution, parameters)
      const mipmaps = renderTargets.reduce((acc, fbo, index) => {
        acc[`u_mipmap_${index}`] = fbo.texture
        acc[`u_mipmap_res_${index}`] = new Vector2(fbo.width, fbo.height)
        return acc
      }, {})

      const reflectorProps = {
        u_resolution: new Vector2(size.width, size.height),
        mirror,
        mixBlur,
        tDiffuse: fbo1.texture,
        mixStrength,
        distortion,
        distortionMap,
        'defines-USE_DISTORTION': !!distortionMap ? '' : undefined,
        ...mipmaps
      }
      return [fbo1, reflectorProps]
    }, [size, gl, resolution, mirror, mixBlur, mixStrength, distortion, distortionMap, renderTargets])

    useFrame(() => {
      if (!meshRef?.current) return
      meshRef.current.visible = false
      gl.setRenderTarget(fbo1)
      gl.render(scene, camera)
      if (mixBlur !== 0) {
        renderTargets.forEach((fbo) => {
          gl.setRenderTarget(fbo)
          gl.render(scene, camera)
        })
      }
      meshRef.current.visible = true
      gl.setRenderTarget(null)
    })
    return (
      <mesh ref={mergeRefs([meshRef, ref])} {...props}>
        {geo}
        {children ? children('glassMaterial', reflectorProps) : <glassMaterial {...reflectorProps} />}
      </mesh>
    )
  }
)
