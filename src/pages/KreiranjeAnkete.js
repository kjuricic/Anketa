import React, { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import InfoForm from '../components/InfoForm';
import Question from '../components/Question';
import './KreiranjeAnkete.css';

function KreiranjeAnkete() {
  const { state, dispatch } = useGlobalState();
  const [question, setQuestion] = useState('');
  const [questions, setQuestions] = useState([]);

  const handleSaveSurvey = () => {
    const surveyData = {
      info: state.info,
      questions: questions,
    };
    dispatch({ type: 'SAVE_SURVEY', payload: surveyData });
  };

  const handleAddQuestion = () => {
    if (question.trim() === '') return;
    // Generiraj numeraciju pitanja koristeći indeks pitanja
    const questionNumber = questions.length + 1;
    const newQuestion = {
      question: `${questionNumber}. ${question}`,
      isMultiChoice: false,
      choices: [],
    };
    setQuestions([...questions, newQuestion]);
    setQuestion('');
  };

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
    
    // Ažuriraj numeraciju pitanja
    updatedQuestions.forEach((q, index) => {
      q.question = `${index + 1}. ${q.question.substring(q.question.indexOf(' ') + 1)}`;
    });
    setQuestions(updatedQuestions);
  };

  const handleQuestionChange = (questionIndex, key, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex][key] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddChoice = (questionIndex) => {
    const updatedQuestions = [...questions];
    const newChoice = { label: '' };
    updatedQuestions[questionIndex].choices.push(newChoice);
    setQuestions(updatedQuestions);
  };

  const handleChoiceChange = (questionIndex, choiceIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices[choiceIndex].label = value;
    setQuestions(updatedQuestions);
  };

  const handleRemoveChoice = (questionIndex, choiceIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].choices.splice(choiceIndex, 1);
    setQuestions(updatedQuestions);
  };

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
      <button onClick={handleAddQuestion}>Dodaj pitanje</button>

      {questions.map((q, questionIndex) => (
        <Question
          key={questionIndex}
          question={q}
          onQuestionChange={(key, value) => handleQuestionChange(questionIndex, key, value)}
          onAddChoice={() => handleAddChoice(questionIndex)}
          onRemoveQuestion={() => handleRemoveQuestion(questionIndex)}
          onChoiceChange={(choiceIndex, value) => handleChoiceChange(questionIndex, choiceIndex, value)}
          onRemoveChoice={(choiceIndex) => handleRemoveChoice(questionIndex, choiceIndex)}
        />
      ))
      } 
      <button onClick={handleSaveSurvey}>Spremi anketu</button>
    </div>
  );
}

export default KreiranjeAnkete;
