import React, { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import InfoForm from '../components/InfoForm';
import './KreiranjeAnkete.css';

function KreiranjeAnkete() {
  const { state, dispatch } = useGlobalState();
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]); // Spremi sva pitanja

// src/pages/KreiranjeAnkete.js
// Importi i ostatak koda...

const handleSaveSurvey = () => {
  const surveyData = {
    info: state.info, // Pretpostavljajući da info sadrži naziv i opis ankete
    questions: questions,
  };
  dispatch({ type: 'SAVE_SURVEY', payload: surveyData });
  // Preusmjeravanje korisnika na stranicu za dijeljenje ankete
  // history.push('/dijeljenje-ankete');
};

  const handleAddQuestion = () => {
    if (question.trim() === '') return; // Ne dodajemo prazna pitanja
    setQuestions([...questions, { question, isMultiChoice: false, choices: [] }]); // Dodaj novo pitanje
    setQuestion(''); // Resetiraj unos pitanja
  };

 const handleAddChoice = (questionIndex) => {
  // Dodaj opciju pitanju na određenom indeksu samo ako nije prazna
  const updatedQuestions = [...questions];
  const newChoice = { label: '' }; // Prazan izbor
  updatedQuestions[questionIndex].choices.push(newChoice);
  setQuestions(updatedQuestions);
};


  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices.splice(choiceIndex, 1);
    setQuestions(updatedQuestions);
  };

  // Dodajte funkciju za promjenu opcija pitanja
  const handleQuestionChange = (questionIndex, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex][key] = value;
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (questionIndex, choiceIndex, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices[choiceIndex][key] = value;
    setQuestions(updatedQuestions);
  };

  //const handleSaveSurvey = () => {
   // const surveyData = {
     // info: state.info,
      //questions: questions,
   // };
    //dispatch({ type: 'SAVE_SURVEY', payload: surveyData });
    // Preusmjeravanje korisnika na stranicu za dijeljenje ankete
    // history.push('/dijeljenje-ankete');
  //};

  return (
    <div className="kreiranje-ankete-container">
      <h2>Kreiranje Nove Ankete</h2>
      <InfoForm />
      <h3>Dodaj nova pitanja</h3>
      <input
        type="text"
        placeholder="Unesite pitanje"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <label>
        Višestruki odabir:
        <input
          type="checkbox"
          checked={questions.length > 0 && questions[questions.length - 1].isMultiChoice}
          onChange={(e) => handleQuestionChange(questions.length - 1, 'isMultiChoice', e.target.checked)}
        />
      </label>
      <button onClick={handleAddQuestion}>Dodaj pitanje</button>
      {questions.map((q, questionIndex) => (
        <div key={questionIndex}>
          <button onClick={() => handleRemoveQuestion(questionIndex)}>Izbriši pitanje</button>
          <p>{q.question}</p>
          <label>
            Višestruki odabir:
            <input
              type="checkbox"
              checked={q.isMultiChoice}
              onChange={(e) => handleQuestionChange(questionIndex, 'isMultiChoice', e.target.checked)}
            />
          </label>
          <h4>Opcije:</h4>
          <button onClick={() => handleAddChoice(questionIndex)}>Dodaj izbor</button>
          {q.choices.map((choice, choiceIndex) => (
            <div key={choiceIndex}>
              <input
                type="text"
                placeholder="Unesite naziv izbora"
                value={choice.label}
                onChange={(e) => handleChoiceChange(questionIndex, choiceIndex, 'label', e.target.value)}
              />
              <button onClick={() => handleRemoveChoice(questionIndex, choiceIndex)}>Izbriši izbor</button>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSaveSurvey}>Spremi anketu</button>
    </div>
  );

          }
export default KreiranjeAnkete;
