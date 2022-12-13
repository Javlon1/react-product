import React, { useState } from 'react'
import '../components/Header.scss'
import Logo__img from '../assets/img/logo__img.svg'
import Logo__text from '../assets/img/logo__text.svg'
import Lite from '../assets/img/lite.svg'
import Intro from './Intro'
import About from './About'
import Servise from './Servise'

export default function Header() {
    const [nav, setNav] = useState(false)
    const [dark, setDark] = useState(false)

  return (
    <>
    <header className={dark? ['header', 'dark'].join(" "): ['header']}>
        <div className={dark? ['container', 'dark'].join(" "): ['container']}>
            <nav className='nav'>
                <a className='nav__img' href="#">
                    <img className='nav__img__left' src={Logo__img} alt="" />
                    <img className='nav__img__right' src={Logo__text} alt="" />
                </a>
                <ul className='nav__list'>
                    <li className='nav__list__item'><a href="#">Product</a></li>
                    <li className='nav__list__item'><a href="#">Customers</a></li>
                    <li className='nav__list__item'><a href="#">Pricing</a></li>
                    <li className='nav__list__item'><a href="#">Resource</a></li>
                    <li className='nav__list__sign-in'><a href="#">Sign In</a></li>
                    <li className='nav__list__sign-up'><a href="#">Sign Up</a></li>
                    <button onClick={()=> setNav(!nav)} className='nav__list__hamburger'>
                        {nav? <i className="bi bi-x-lg"></i> : <i className="bi bi-list"></i>}
                    </button>
                </ul>
                <button className={dark? ['nav__btn', 'btn_dark'].join(" "): ['nav__btn']} onClick={()=> setDark(!dark)}>
                    <img src={Lite} alt="" />
                </button>
                <div className={nav ? ['nav__list__responsve', 'active'].join(' ') : ["nav__list__responsve"]}>
                    <ul className={dark? ['dark']: ['']}>
                        <li className='nav__list__responsve__item'><a href="#">Product</a></li>
                        <li className='nav__list__responsve__item'><a href="#">Customers</a></li>
                        <li className='nav__list__responsve__item'><a href="#">Pricing</a></li>
                        <li className='nav__list__responsve__item'><a href="#">Resource</a></li>
                        <ul className='nav__list__responsve__log'>
                            <li className='nav__list__responsve__log__sign-in'><a href="#">Sign In</a></li>
                            <li className='nav__list__responsve__log__sign-up'><a href="#">Sign Up</a></li>
                        </ul>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
    <Intro darrk={dark}/>
    <About darrk={dark}/>
    <Servise darrk={dark}/>
    </>
  )
}