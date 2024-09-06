import React from 'react';

import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the New Flavour"/>
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
    </div>
    <div className='app__wrapper_img'>

    </div>
  </div>
);

export default Header;
