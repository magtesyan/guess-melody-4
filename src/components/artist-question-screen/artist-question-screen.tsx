import * as React from "react";
import Artist from "../artist/artist";
import {QuestionArtist, AnswerArtist} from "../../types";

interface Props {
  onAnswer: (question: QuestionArtist, answer: AnswerArtist) => void;
  question: QuestionArtist;
  renderPlayer: (string, number) => React.ReactNode;
};

const ArtistQuestionScreen: React.FunctionComponent<Props> = (props: Props) => {
  const {onAnswer, question, renderPlayer} = props;
  const {answers, song} = question;
  const artists = answers.map((answer, index) => {
    return (
      <Artist
        picture = {answer.picture}
        artist = {answer.artist}
        index = {index}
        key = {answer.picture}
        answer = {answer}
        question = {question}
        onAnswer = {onAnswer}
      />
    );
  });

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {artists}
      </form>
    </section>
  );
};

export default ArtistQuestionScreen;
