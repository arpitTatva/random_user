import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Button,
  Platform,
  // Customizable Area Start
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StatusBar,
  // Customizable Area End
} from 'react-native';

import FavouriteController, {Props, configJSON} from './favouriteController';
import {email, locationIcon, logoIcon, starIcon} from './assets';
import Scale, {scaledSize, verticalScale} from '../../../components/Scale';

export default class FavouriteScreen extends FavouriteController {
  constructor(props: Props) {
    super(props);
    // Customizable Area Start
    // Customizable Area End
  }

  // Customizable Area Start
  renderItem = (item, index) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.row}>
          <Image
            resizeMode={'cover'}
            source={{uri: item.picture?.thumbnail}}
            style={styles.userImage}
          />
          <View style={styles.nameCont}>
            <Text
              style={
                styles.nameStyle
              }>{`${item?.name?.first} ${item?.name?.last}`}</Text>
            <View style={[styles.row, {marginTop: scaledSize(4)}]}>
              <Image
                resizeMode={'contain'}
                source={locationIcon}
                style={styles.location}
              />
              <Text
                style={
                  styles.locationText
                }>{`${item?.location?.city}, ${item?.location?.country}`}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => this.onFavoriteSelect(item, index)}>
          <Image
            source={starIcon}
            style={{height: verticalScale(20), width: scaledSize(20)}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  // Customizable Area End

  render() {
    return (
      // Customizable Area Start
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#FFFFFF'} />
        <View style={styles.container}>
          {/* Customizable Area Start */}
          {/* Merge Engine UI Engine Code */}
          <View style={styles.logoContainer}>
            <Image
              resizeMode={'contain'}
              source={logoIcon}
              style={styles.logoStyle}
            />
          </View>
          <View style={styles.viewStyle}>
            <FlatList
              data={this.state.favoriteData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item + index}
              renderItem={({item, index}) => this.renderItem(item, index)}
              // onEndReached={() => this.fetchMoreUser()}
              // onEndReachedThreshold={0.1}
            />
          </View>
          {/* Merge Engine UI Engine Code */}
          {/* Customizable Area End */}
        </View>
      </SafeAreaView>
      // Customizable Area End
    );
  }
}

// Customizable Area Start
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  viewStyle: {
    flex: 1,
    backgroundColor: '#C5C5C5',
    paddingBottom: scaledSize(15),
  },
  logoStyle: {
    height: scaledSize(40),
    width: scaledSize(40),
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(12),
    height: verticalScale(55),
    justifyContent: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: scaledSize(12),
    marginLeft: scaledSize(30),
    marginTop: verticalScale(12),
    padding: Scale(15),
    borderRadius: scaledSize(6),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: scaledSize(65),
    width: scaledSize(60),
    marginLeft: scaledSize(-30),
    borderRadius: Scale(35),
  },
  nameStyle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#000000',
  },
  location: {
    height: scaledSize(15),
    width: scaledSize(15),
    tintColor: 'grey',
  },
  locationText: {
    color: 'grey',
    marginLeft: scaledSize(4),
  },
  nameCont: {
    marginLeft: scaledSize(12),
  },
});
// Customizable Area End
