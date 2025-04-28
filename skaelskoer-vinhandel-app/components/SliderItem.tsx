import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'

type Props = {
    item: ImageSliderType;
    index: number;
    scrollX: SharedValue<number>

}

const {width} = Dimensions.get('screen');

const SliderItem = ({item, index, scrollX}: Props) => {
    const rnAnimatedStyle = useAnimatedStyle(() => {
        return{
            transform: [{
                translateX: interpolate(
                    scrollX.value,
                    [(index-1) * width, index * width, (index+1) * width],
                    [-width * 0.25, 0, width * 0.25],
                    Extrapolation.CLAMP
                ),
            },
            {
                scale: interpolate(
                    scrollX.value,
                    [(index-1) * width, index * width, (index+1) * width],
                    [0.9, 1, 0.9],
                    Extrapolation.CLAMP
                ),
            }
        ],
    };
});
  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
        <Image source={item.image} style={{width: 300, height: 350, borderRadius: 20}} />
        <View style={{gap: 10}}>
            <Text style={styles.title}>{item.title}</Text>
            {/* <Text style={styles.description}>{item.description}</Text> */}
        </View>
    </Animated.View>
  )
}

export default SliderItem

const styles = StyleSheet.create({
    itemContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: width
    },
    title: {
        // color: '#fffff',
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 1.5,
    },
    description: {
        fontSize: 12,
        letterSpacing: 1.2,
    }
})