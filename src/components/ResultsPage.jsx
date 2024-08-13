import React from 'react';
import './ResultsPage.css';
import { Link } from 'react-router-dom';
import { motion as m } from 'framer-motion';
import logo from './lrnrlogo.png';

export default function ResultsPage() {
  return (
    <m.div 
    initial= {{y: "100%", opacity: 0}} 
    animate= {{y: "0%", opacity: 1}} 
    transition={{duration: 0.75, ease: "easeOut"}}
    >
      <h1 className="results-title"><span>lrnr</span></h1>
            <div className="results">
                <h2>Questions Right: 0111</h2>
                <Link to="/QuizPage"><button>TRY ANOTHER QUIZ</button></Link>
      
            </div>
    </m.div>
  )
}
