import React from 'react';
import { connect } from 'react-redux';
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native';
import { getKey } from '../helpers/storage'
import connectToProps from '../Utils/maps'

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.restoreSignature();
    this.restoreUserAuth();
  }

  restoreSignature = async () => {
    const storedIsSignIn = await getKey('isSignedIn');
    const siteDetails = await getKey('siteDetails');
    // if it says the user is not logged in in app state, but was stored that it is logged in in asyncStorage
    // then set cached values
    // and isSignedIntoOffice false, meaning user is not signed into any offices

    if (!this.props.isSignedIntoOffice && !!storedIsSignIn) {
      this.props.modifyIsSignedInOffice(true)
      this.props.modifySiteDetails(siteDetails)
      // this.setState({
      //   isSignedIn: !!storedIsSignIn,
      //   dailyRequired: await getKey('dailyRequired'),
      //   from: await getKey('from'),
      //   to: await getKey('to')
      // })
    }
  }

  restoreUserAuth = async () => {
    // if user doesnt exist in the redux state
    if (!this.props.user) {
      // attempt getting the user from cache
      const user = await getKey('user');
      const token = await getKey('token');
      const auth = !!user && !!token;
      // if the user is resulted in null, it will set auth to false and vice versa
      this.props.setUser({ user, auth })
      // if the user is not authed then navigate to the login page
      if (!auth) {
        console.log('should go to Auth')
        this.props.navigation.navigate('Auth');
        return
      }
    }
    // user exist in the redux state
    this.props.navigation.navigate('App');

  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default connectToProps(AuthLoadingScreen)