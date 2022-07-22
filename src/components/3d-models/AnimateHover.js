
export default function AnimateHover(ref, animateProps) {

    // Grow scale, and rotate on z axis.
    if (animateProps.scale.growActive === true) {
        if (ref.current.scale.x < animateProps.scale.growScale[0]) {
          ref.current.scale.x += .25;
          ref.current.scale.z += .25;
        }
        ref.current.rotation.z += .02;
      }
  
    // Shrink scale, and bring z axis position back to 0.
    if (animateProps.scale.shrinkActive === true) {
        ref.current.rotation.z = 0;
        if (ref.current.scale.x > animateProps.scale.shrinkScale[0]) {
          ref.current.scale.x -= .25;
        }
        if (ref.current.scale.z > animateProps.scale.shrinkScale[2]) {
          ref.current.scale.z -= .25;
        }
    }
}