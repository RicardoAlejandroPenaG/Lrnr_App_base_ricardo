import React from 'react';
import './Account.css';
import { motion as m } from 'framer-motion';

export default function Account() {
  return (
    <m.div 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
             <m.h1 className='Account1'
                initial= {{y: "100%", opacity: 0}} 
                animate= {{y: "0%", opacity: 1}} 
            >Account</m.h1>
        
    <div className='account-page'>
        <div className="account-container">
      
            <div className="stacked-account-container">
     
            <m.div 
              initial= {{x: "100%", opacity: 0}} 
              animate= {{x: "0%", opacity: 1}} 
            className="streak-box">
            <i class="fa-solid fa-fire-flame-curved fa-3x"></i>
                <h2>Streak</h2>
                <p>You have a streak of <span>5</span> days!</p>
            </m.div>
            <m.div 
              initial= {{x: "100%", opacity: 0}} 
              animate= {{x: "0%", opacity: 1}} 
              className="platinum-box">
            <i class="fa-solid fa-table-list fa-3x"></i>
                <h2>Platinum Quizzes</h2>
                <ul>
                  <li>Golang - Intermediate</li>
                  <li>Javascript - Beginner</li>
                  <li>AWS - Beginner</li>
                </ul>
            </m.div>
            <m.div 
              initial= {{y: "100%", opacity: 0}} 
              animate= {{y: "0%", opacity: 1}} 
        className="level-box">
                    <i class="fa-solid fa-user fa-3x"></i>
                <m.h2>lrnr Level:</m.h2>
                <span>2</span>
                <p>150/200 xp</p>
            </m.div>
            </div>
      </div>
    </div>
    </m.div>
  )
}
