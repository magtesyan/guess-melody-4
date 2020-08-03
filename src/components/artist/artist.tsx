import * as React from "react";
import {QuestionArtist, AnswerArtist} from "../../types";

interface Props {
  onAnswer: (question: QuestionArtist, answer: AnswerArtist) => void;
  index: number;
  question: QuestionArtist;
  answer: AnswerArtist;
};

const Artist = (props) => {
  const {index, answer, question, onAnswer} = props;
  const handleAnswerChoice = (evt) => {
    evt.preventDefault();
    onAnswer(question, answer);
  };

  return (
    <div className="artist">
      <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${index}`} id={`answer-${index}`}
        onChange={handleAnswerChoice}
      />
      <label className="artist__name" htmlFor={`answer-${index}`}>
        <img className="artist__picture" src={answer.picture} alt={answer.artist} />
        {answer.artist}
      </label>
    </div>
  );
};

export default Artist;
