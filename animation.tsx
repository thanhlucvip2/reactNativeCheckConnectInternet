import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, SafeAreaView, View} from 'react-native';
const Animation = () => {
  // const topMotion = useRef(new Animated.Value(0)).current;
  // const screenHeight = Dimensions.get('window').height;
  // console.log(screenHeight);
  // useEffect(() => {
  //   Animated.timing(topMotion, {
  //     toValue: screenHeight - 200,
  //     duration: 1000,
  //     useNativeDriver: false,
  //   }).start();
  // }, [topMotion, screenHeight]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, borderWidth: 2, borderColor: 'red'}}>
        {/* <Animated.View
          style={{
            marginTop: topMotion,
            width: 150,
            height: 150,
            backgroundColor: 'blue',
          }}></Animated.View> */}
      </View>
    </SafeAreaView>
  );
};
export default Animation;
