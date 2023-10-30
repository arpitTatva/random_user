import {Dimensions} from 'react-native';

//Screen Constatnts
const SCREEN_HEIGHT = 736;
const SCREEN_WIDTH = 414;

const {height, width} = Dimensions.get('window');
const scaleWidth = width / SCREEN_WIDTH;
const scaleHeight = height / SCREEN_HEIGHT;
const scale = Math.min(scaleWidth, scaleHeight);

/**
 * Function to scale a value based on the size of the screen size and the original
 * size used on the design.
 */
export default function (units = 1) {
  return (width / SCREEN_WIDTH) * units;
}

const verticalScale = (size: number) => (height / SCREEN_HEIGHT) * size;

export const scaledSize = (size: any) => Math.ceil(size * scale);
export {verticalScale};
