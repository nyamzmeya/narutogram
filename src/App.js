import "./App.css";
import React, { Suspense } from "react";
import store from "./redux/redux-store";
import { Provider } from "react-redux";


import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import News from "./components/Main/News/News";
import Settings from "./components/Main/Settings/Setting";
import Music from "./components/Main/Music/Music";


import HeaderContainer from "./components/Header/HeaderContainer";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Loading from "./common/Loading";



const AuthPage = React.lazy(() => import('./common/auth'));
const Main = React.lazy(() => import("./components/Main/Profile/Main"));
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));
const UsersContainer = React.lazy(() => import ("./components/Main/Users/UsersSearch/UsersContainer"));
const UserContainer = React.lazy(() => import ("./components/Main/Users/UserProfile/UserContainer"));


class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialised) {
      return <Loading />;
    }

    return (
        <div className="app-wrapper">
          <HeaderContainer />
          <Menu />
          <div className="app-content">

            <Route path="/auth"  render={ () => {
              return <Suspense fallback={<Loading />}>
                <AuthPage />
                </Suspense>
            }}/>

            <Route path="/dialogs" render={ () => {
              return <Suspense fallback={<Loading />}>
                <DialogsContainer />
                </Suspense>
            }}/>

            <Route path="/main" render={() => {
              return <Suspense fallback={<Loading />}>
                <Main />
                </Suspense>
            }}/>
            
            <Route path="/search" render={() => {
              return <Suspense fallback={<Loading />}>
                <UsersContainer />
                </Suspense>
            }} />

            <Route path="/user/:userId" render={() => {
              return <Suspense fallback={<Loading />}>
                <UserContainer />
                </Suspense>
            }} />
            
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
          <Footer />
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialised: state.app.initialised,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

let MainApp = (props) => {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
  <Provider store={store}>
    <AppContainer />
    </Provider>
    </BrowserRouter>
}

export default MainApp;
