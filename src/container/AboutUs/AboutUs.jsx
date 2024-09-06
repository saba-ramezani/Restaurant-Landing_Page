import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const AboutUs = () => (
  <div className='app__aboutus section__padding app__bg flex__center' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G Letter"/>
    </div>

    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, iusto! Et itaque velit eligendi, laborum eveniet possimus tenetur voluptatem dolorem sequi facilis fuga dolorum natus fugiat architecto? Ipsam, illo iusto?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img'/>
        <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, iusto! Et itaque velit eligendi, laborum eveniet possimus tenetur voluptatem dolorem sequi facilis fuga dolorum natus fugiat architecto? Ipsam, illo iusto?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
    
  </div>
);

export default AboutUs;
