import * as React from "react";

interface Props {
  src: string;
  index: number;
  userAnswers: boolean[];
  handleAnswerSubmit: (index: number, userAnswers: boolean[], value: boolean) => void;
  renderPlayer: (src: string, id: number) => React.ReactNode;
}

const TrackList: React.FunctionComponent<Props> = (props: Props) => {
  const {src, index, userAnswers, handleAnswerSubmit, renderPlayer} = props;

  const handleChangeAnswer = (evt) => {
    const value = evt.target.checked;
    handleAnswerSubmit(index, userAnswers, value);
  };


  return (
    <div className="track">
      {renderPlayer(src, index)}
      <div className="game__answer">
        <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`}
          checked={userAnswers[index]}
          onChange={handleChangeAnswer}
        />
        <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
      </div>
    </div>
  );
};

export default TrackList;
