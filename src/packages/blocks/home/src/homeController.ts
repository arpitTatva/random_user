import {Component} from 'react';
import axiosInstance from '../../../components/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export default class HomeController extends Component {
  // Customizable Area Start
  // Customizable Area End

  constructor(props: Props) {
    super(props);

    // Customizable Area Start

    this.state = {
      // Customizable Area Start
      name: 'Home',
      userData: [],
      resultCount: 10,
      favoriteData: [],
      isLoading: false,
      isRefreshed: false,
      // Customizable Area End
    };

    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  async componentDidMount() {
    this.callRandomuserApi();
    this.navFocusListener = this.props.navigation.addListener('focus', () => {
      this.getHomeUser();
    });
  }

  async componentWillUnmount() {
    if (this.navFocusListener) {
      this.navFocusListener?.remove();
    }
  }

  getHomeUser = async () => {
    const userArray = await AsyncStorage.getItem('homeData').catch(e =>
      console.log(e),
    );
    console.log('userArray=====', userArray);

    if (userArray) {
      this.setState({
        userData: JSON.parse(userArray),
      });
    }
  };

  callRandomuserApi = async () => {
    this.setState({
      isLoading: true,
    });
    const response = await axiosInstance.get('/?results=10');
    // const newData = ;
    this.setState({
      userData: [...this.state.userData, ...response.data.results],
      isLoading: false,
    });
  };

  fetchMoreUser = async () => {
    this.setState({
      isRefreshed: true,
    });
    await this.callRandomuserApi();
    this.setState({
      isRefreshed: false,
    });
  };

  onFavoriteSelect = async (item, index) => {
    const tempArray = [...this.state.userData];
    const favoriteArr = [...this.state.favoriteData];

    const removedValue = tempArray.splice(index, 1);
    favoriteArr.push(removedValue[0]);

    this.setState({userData: tempArray, favoriteData: favoriteArr});
    console.log('===---', JSON.stringify(favoriteArr));
    AsyncStorage.setItem('homeData', JSON.stringify(tempArray));
    AsyncStorage.setItem('favoriteUseres', JSON.stringify(favoriteArr));
  };
  // Customizable Area End
}
