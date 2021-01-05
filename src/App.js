import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT } from './actions/actionTypes';
import Home from './views/Home';

const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    redirectTo: state.common.redirectTo
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentDidMount() {
    const token = window.localStorage.getItem('jwt');
    this.props.onLoad(null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      );
    }
    return (
      <div>
        Application started
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
