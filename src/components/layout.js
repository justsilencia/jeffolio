import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import SkillNetworks from './skillnetworks';
import '../styles/index.scss';

const Layout = ({ children }) => {

  return (
    <div className='content-outer' id='outer-container'>
      <main className='content-wrap' id='page-wrap'>
        <SkillNetworks />
        <div className='powered-by'>
            <div>Powered by</div>
            <StaticImage imgStyle={{ objectFit: 'contain' }} src='../images/pern.png' alt='Powered by SERN stack.' />
        </div>
        <div className='app container'>
          { children }
        </div>
      </main>
    </div>
  )
}

export default Layout;
