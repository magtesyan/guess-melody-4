import PropTypes from "prop-types";
import React from "react";

const Mistakes = (props) => {
  const {count} = props;
  const mistakes = new Array(count).fill(``);

  const renderMistakes = mistakes.map((it, i) => <div key={`mistake-${i}`} className="wrong" />);

  return (
    <div className="game__mistakes">
      {renderMistakes}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Mistakes;
