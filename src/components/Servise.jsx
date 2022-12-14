import React from 'react'
import '../components/Servise.scss'
import Servise1 from "../assets/img/service1.png"
import Servise2 from "../assets/img/service2.png"
import Servise3 from "../assets/img/service3.png"
import Ser1 from "../assets/img/ser1.png"
import Ser2 from "../assets/img/ser2.png"
import Ser3 from "../assets/img/ser3.png"

export default function Servise({darrk}) {
  return (
    <section className={darrk? ['servise', 'dark1'].join(" "): ['servise']}>
        <div className={darrk? ['container', 'dark1'].join(" "): ['container']}>
            <ul className={darrk? ['container__list', 'dark1'].join(" "): ['container__list']}>
                <li className={darrk? ['container__list__item1', 'dark1'].join(" "): ['container__list__item1']}>
                    <div className="container__list__item1__left">
                        <p className='container__list__item1__left__title1'>Effortless Validation for</p>
                        <h1 className='container__list__item1__left__title2'>Management</h1>
                        <h2 className='container__list__item1__left__title3'>Accessory makers</h2>
                        <p className='container__list__item1__left__text'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h2 className='container__list__item1__left__title3'>Alterationists</h2>
                        <p className='container__list__item1__left__text'>If you are looking for a new way to promote your business that won’t cost you more money, </p>
                    </div>
                    <div className="right">
                        <img src={Servise1} alt="" />
                    </div>
                </li>
                <li className={darrk? ['container__list__item2', 'dark1'].join(" "): ['container__list__item2']}>
                    <div className="container__list__item2__left">
                        <img src={Servise2} alt="" />
                    </div>
                    <div className="container__list__item2__right">
                        <p className='container__list__item2__right__title1'>Easier decision making for</p>
                        <h1 className='container__list__item2__right__title2'>Customer Support</h1>
                        <p className='container__list__item2__right__text'>The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person. </p>
                        <ul className='container__list__item2__right__list'>
                            <li className='container__list__item2__right__list__item'>
                                <img src={Ser1} alt="" />
                                <p>Never worry about overpaying for your energy again. </p>
                            </li>
                            <li className='container__list__item2__right__list__item'>
                                <img src={Ser2} alt="" />
                                <p>We will only switch you to energy companies that we trust and will treat you right</p>
                            </li>
                            <li className='container__list__item2__right__list__item'>
                                <img src={Ser3} alt="" />
                                <p>We track the markets daily and know where the savings are.</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={darrk? ['container__list__item3', 'dark1'].join(" "): ['container__list__item3']}>
                    <div className={darrk? ['container__list__item3__left', 'dark1'].join(" "): ['container__list__item3__left']}>
                        <p className='container__list__item3__left__title1'>Optimisation for</p>
                        <h1 className='container__list__item3__left__title2'>Collaborative</h1>
                        <p className='container__list__item3__left__text'>Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. </p>
                        <h2 className='container__list__item3__left__title3'>Accessory makers</h2>
                        <p className='container__list__item3__left__text'>While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun</p>
                        <h2 className='container__list__item3__left__title3'>Alterationists</h2>
                        <p className='container__list__item3__left__text1'>If you are looking for a new way to promote your business that won’t cost you more money. </p>
                    </div>
                    <div className="container__list__item3__right">
                        <img src={Servise3} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
