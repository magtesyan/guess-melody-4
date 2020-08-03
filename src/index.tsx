import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import * as React from "react";
import * as ReactDOM from "react-dom";
import thunk from "redux-thunk";

import App from "./components/app/app";
import {createAPI} from "./api";
import {Operation as DataOperation} from "./redux/data/data";
import {Operation as UserOperation} from "./redux/user/user";
import {ActionCreator, AuthorizationStatus} from "./redux/user/user";
import reducer from "./redux/reducer";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(DataOperation.loadQuestions());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);
