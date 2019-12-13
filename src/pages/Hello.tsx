import React, { useContext } from 'react';
import '../scss/hello.scss';
const Home = () => (
  <div>
    <link
      href='https://fonts.googleapis.com/css?family=Lato'
      rel='stylesheet'
    />
    <div className='content'>
      <div className='content__container'>
        <p className='content__container__text'>Hello</p>
        <ul className='content__container__list'>
          <li className='content__container__list__item'>jingle !</li>
          <li className='content__container__list__item'>helson !</li>
          <li className='content__container__list__item'>Drei !</li>
          <li className='content__container__list__item'>everybody !</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Home;
