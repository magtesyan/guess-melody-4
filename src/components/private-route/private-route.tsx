import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../redux/user/user";
import {getAuthorizationStatus} from "../../redux/user/selectors";

interface Props {
  authorizationStatus: string;
  exact: boolean;
  path: string;
  render: () => React.ReactNode;
};

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={() => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
