import React, { useState } from 'react'
import "../components/Intro.scss"
import Img from "../assets/img/amico.png"

export default function Intro({darrk}) {

    return (
        <section className={darrk? ['intro', 'dark'].join(" "): ['intro']}>
            <div className="container">
                <div className="left">
                    <h1 className='left__title'>Work  at the speed of thought</h1>
                    <p className='left__discriptions'>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
                    <ul className='left__list'>
                        <li className='left__list__item'><button className='button'>Get started</button></li>
                        <li className='left__list__item'><a className='a' href="#"><i className="bi bi-caret-right-fill"></i> Watch the Video</a></li>
                    </ul>
                </div>
                <div className="right">
                    <img src={Img} alt="" />
                </div>
            </div>
        </section>
    )
}
