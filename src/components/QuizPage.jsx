import './QuizPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    language: 'golang',
    difficulty: 'novice',
    number: 5,
    type: 'multiple',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/QuizPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch quiz data');
      }
  
      const generatedQuiz = await response.text();
      console.log('Generated Quiz:', generatedQuiz);
  
      // Navigate to /test and pass the generatedQuiz value in the state
      navigate('/test', { state: { generatedQuiz } });
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      // Handle errors as needed
    }
  };
  return (
    <div className='quiz-page'>
      <h1>Personalize Your Quiz</h1>
      <p>Please choose your preferences below to generate your personalized quiz</p>
      

<form onSubmit={handleSubmit}>
<div>
  <label htmlFor="language">Choose a programming topic:</label>
  <select id="language" name="language" onChange={handleInputChange} required>
    <option value="">Select a topic</option>
    <option value="golang">Golang</option>
    <option value="aws">AWS</option>
    <option value="javascript">JavaScript</option>
    <option value="ci/cd">CI/CD</option>
    <option value="home gardens">Home gardens</option>
    <option value="coffee">Coffee</option>
    <option value="finger foods">Finger Foods</option>
  </select>
</div>
<div>
  <label htmlFor="difficulty">Choose a difficulty level:</label>
  <select id="difficulty" name="difficulty" onChange={handleInputChange} required>
    <option value="">Select a difficulty level</option>
    <option value="novice">Novice</option>
    <option value="intermediate">Intermediate</option>
    <option value="expert">Expert</option>
  </select>
</div>
<div>
  <label htmlFor="number">Choose number of questions:</label>
  <select id="number" name="number" onChange={handleInputChange} required>
    <option value="">Select a number of questions</option>
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
  </select>
</div>
<div>
  <label htmlFor="type">Choose question style:</label>
  <select id="type" name="type" onChange={handleInputChange} required>
    <option value="">Select a question style</option>
    <option value="master oogway">Master Oogway</option>
    <option value="1940s Gangster">1940s Gangster</option>
    <option value="Like I'm an 8 year old">Like I'm an 8 year old</option>
    <option value="Normal">Normal</option>
    <option value="Jedi">Jedi</option>
    <option value="Captain Jack Sparrow">Captain Jack Sparrow</option>
    <option value="Matthew McConaughey">Matthew McConaughey</option>
  </select>
</div>
<div>
  <button type="submit">Generate Quiz</button>
</div>
</form>
    </div>
  );
};

export default QuizPage;



