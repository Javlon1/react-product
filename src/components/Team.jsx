import React from 'react'
import "../components/Team.scss"
import Team1 from "../assets/img/team1.png"
import Team2 from "../assets/img/team2.png"
import Team3 from "../assets/img/team3.png"
import Team4 from "../assets/img/team4.png"


export default function Team({darrk}) {
  return (
    <section className={darrk? ['team', 'dark'].join(" "): ['team']}>
        <div className="container">
            <h1 className='container__title'>Quick & Easy Process</h1>
            <p className='container__discriptions'>Do you require some help for your project: Conception workshop, prototyping, marketing strategy, landing page, Ux/UI?</p>
            <ul className='container__list'>
                <li className='container__list__item'>
                    <ul className='container__list__item__list'>
                        <li className='container__list__item__list__item'>
                            <img src={Team1} alt="" />
                            <p>I can take care of your pitch</p>
                        </li>
                        <li className='container__list__item__list__item'>
                            <p>I can design you website</p>
                            <img src={Team2} alt="" />
                        </li>
                    </ul>
                </li>
                <li className='container__list__item'>
                    <ul className='container__list__item__list'>
                        <li className='container__list__item__list__item'>
                            <p>I can prototype your app</p>
                            <img src={Team3} alt="" />
                        </li>
                        <li className='container__list__item__list__item'>
                            <img src={Team4} alt="" />
                            <p>I can help marketing strategy</p>
                        </li>
                    </ul>
                </li>
            </ul>
            <button className='container__btn'>Contact our expert</button>
        </div>
    </section>
  )
}