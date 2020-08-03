import * as React from "react";

interface Props {
  count: number;
};

const Mistakes: React.FunctionComponent<Props> = (props: Props) => {
  const {count} = props;
  const mistakes = new Array(count).fill(``);

  const renderMistakes = mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />);

  return (
    <div className="game__mistakes">
      {renderMistakes}
    </div>
  );
};

export default Mistakes;
