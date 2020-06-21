import App from "./components/app/app.jsx";
import Questions from "./mocks/questions.js";
import React from "react";
import ReactDOM from "react-dom";

const Settings = {
  ERRORS_COUNT: 3
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
      questions={Questions}
    />,
    document.getElementById(`root`)
);
