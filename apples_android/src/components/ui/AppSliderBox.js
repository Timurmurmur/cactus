import React from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";


export const AppSliderBox = ({
  images,
  sliderBoxHeight,
  // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor,
  inactiveDotColor,
  paginationBoxVerticalPadding,
  autoplay,
  circleLoop,
  resizeMethod,
  resizeMode,
  paginationBoxStyle,
  dotStyle,
  ImageComponentStyle,
  imageLoadingColor,
  stylesBg
}) => {
  return (
    // <ImageBackground source={require('../../../assets/bgr_slider.png')} style={styles.image}>
    <View style={{ ...styles.bg, ...stylesBg }}>
      <SliderBox
        // ImageComponent={FastImage}
        images={images}
        sliderBoxHeight={sliderBoxHeight}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        dotColor={dotColor}
        inactiveDotColor={inactiveDotColor}
        paginationBoxVerticalPadding={paginationBoxVerticalPadding}
        autoplay={autoplay}
        circleLoop={circleLoop}
        resizeMethod={resizeMethod}
        resizeMode={resizeMode}
        paginationBoxStyle={paginationBoxStyle}
        dotStyle={dotStyle}
        ImageComponentStyle={ImageComponentStyle}
        imageLoadingColor={imageLoadingColor}
      />
    </View>
    // </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bg: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  // boxHeight: {
  //   height: 200
  // },
})
