import React from 'react'
import Img1 from '../assets/img/img1.png'
import Img2 from '../assets/img/img2.png'
import Img3 from '../assets/img/img3.png'
import Img4 from '../assets/img/img4.png'
import '../components/About.scss'

export default function About({darrk}) {
  return (
    <section className={darrk? ['about', 'dark'].join(" "): ['about']}>
        <div className="container">
            <h1 className='container__title'>Product  was Built Specifically for You</h1>
            <ul className='list'>
              <li className='list__item'>
                <img className='list__item__img' src={Img1} alt="" />
                <h1 className='list__item__title'>First click tests</h1>
                <p className='list__item__text'>While most people enjoy casino gambling,</p>
              </li>
              <li className='list__item'>
                <img className='list__item__img' src={Img2} alt="" />
                <h1 className='list__item__title'>Design surveys</h1>
                <p className='list__item__text'>Sports betting, lottery and bingo playing for the fun</p>
              </li>
              <li className='list__item'>
                <img className='list__item__img' src={Img3} alt="" />
                <h1 className='list__item__title'>Preference tests</h1>
                <p className='list__item__text'>The Myspace page defines the individual.</p>
              </li>
              <li className='list__item'>
                <img className='list__item__img' src={Img4} alt="" />
                <h1 className='list__item__title'>Five second tests</h1>
                <p className='list__item__text'>Personal choices and the overall personality of the person. </p>
              </li>
            </ul>
            <button className='container__btn'>SIGN UP NOW</button>
        </div>
    </section>
  )
}
