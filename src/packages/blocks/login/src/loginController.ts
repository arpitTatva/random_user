import {Component} from 'react';
import {isEmailValid, isValidPassword} from '../../../components/utils';

// Customizable Area Start
// Customizable Area End

export const configJSON = require('./config');

export interface Props {
  navigation: any;
  id: string;
  // Customizable Area Start
  // Customizable Area End
}

interface S {
  txtInputValue: string;
  txtSavedValue: string;
  enableField: boolean;
  // Customizable Area Start
  // Customizable Area End
}

interface SS {
  id: any;
  // Customizable Area Start
  // Customizable Area End
}

export default class LoginController extends Component {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);

    // Customizable Area Start

    this.state = {
      // Customizable Area Start
      email: '',
      password: '',
      isValidEmail: false,
      isValidPassword: false,
      // Customizable Area End
    };

    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start

  onChangeEmail = (emailText: string) => {
    this.setState({email: emailText});
    if (emailText.length === 0) {
      this.setState({isValidEmail: false});
    } else if (!isEmailValid(emailText)) {
      this.setState({isValidEmail: false});
    } else {
      this.setState({isValidEmail: true});
    }
  };

  onChangePassword = (passwordText: string) => {
    this.setState({password: passwordText});
    if (passwordText.length === 0) {
      this.setState({isValidPassword: false});
    } else if (!isValidPassword(passwordText)) {
      this.setState({isValidPassword: false});
    } else {
      this.setState({isValidPassword: true});
    }
  };

  onLoginPress = () => {
    this.props.navigation.navigate('TabScreen');
  };
  // Customizable Area End
}
