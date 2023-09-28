// Question.js
import React from 'react';
import './Question.css';

const Question = ({
  question,
  onQuestionChange,
  onAddChoice,
  onRemoveQuestion,
  onChoiceChange,
  onRemoveChoice, // Dodana funkcija za uklanjanje izbora
}) => {
  const handleRemoveChoice = (choiceIndex) => {
    onRemoveChoice(choiceIndex); // Pozovi funkciju onRemoveChoice i proslijedi indeks izbora
  };

  return (
    <div>
      <button onClick={onRemoveQuestion}>Izbriši pitanje</button>
      <input
        type="text"
        placeholder="Unesite pitanje"
        value={question.question}
        onChange={(e) => onQuestionChange(e.target.value)}
      />
      <label>
        Višestruki odabir:
        <input
          type="checkbox"
          checked={question.isMultiChoice}
          onChange={(e) => onQuestionChange('isMultiChoice', e.target.checked)}
        />
      </label>
      <h4>Opcije:</h4>
      <button onClick={onAddChoice}>Dodaj izbor</button>
      {question.choices.map((choice, choiceIndex) => (
        <div key={choiceIndex}>
          <input
            type="text"
            placeholder={`Unesite naziv izbora ${choiceIndex + 1}`} // Numeracija izbora
            value={choice.label}
            onChange={(e) => onChoiceChange(choiceIndex, e.target.value)}
          />
          <button onClick={() => handleRemoveChoice(choiceIndex)}>Izbriši izbor</button>
        </div>
      ))}
    </div>
  );
};

export default Question;
