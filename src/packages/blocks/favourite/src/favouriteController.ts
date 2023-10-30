import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';

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

export default class FavouriteController extends Component {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);

    // Customizable Area Start

    this.state = {
      // Customizable Area Start
      favoriteData: [],
      selectedIndex: null,
      removedData: [],
      // Customizable Area End
    };

    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.navFocusListener = this.props.navigation.addListener('focus', () => {
      this.getFavoriteUser();
    });
  }

  async componentWillUnmount() {
    if (this.navFocusListener) {
      this.navFocusListener?.remove();
    }
  }

  getFavoriteUser = async () => {
    console.log('calleedd');
    const userArray = await AsyncStorage.getItem('favoriteUseres');
    console.log('userArray=====>>>', JSON.parse(userArray));
    this.setState({
      favoriteData: JSON.parse(userArray),
    });
  };

  onFavoriteSelect = async (item, index) => {
    console.log('=====', index);
    const homeArray = await AsyncStorage.getItem('homeData');

    const tempArray = [...this.state.favoriteData];
    const removedTempArr = [...this.state.removedData];

    const removedValue = tempArray.splice(index, 1);
    removedTempArr.push(removedValue[0]);

    AsyncStorage.setItem(
      'homeData',
      JSON.stringify([...JSON.parse(homeArray), ...removedTempArr]),
    );
    AsyncStorage.setItem('favoriteUseres', JSON.stringify(tempArray));
    this.setState({
      favoriteData: tempArray,
    });
  };
  // Customizable Area End
}
