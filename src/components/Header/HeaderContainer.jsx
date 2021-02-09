import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { Logout } from "../../redux/auth-reducer";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

class HeaderComponent extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const HeaderContainer = connect(mapStateToProps, {Logout })(
  HeaderComponent
);

export default HeaderContainer;
