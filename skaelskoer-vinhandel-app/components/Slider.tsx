import { Dimensions, StyleSheet, View, ViewToken } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ImageSliderType } from '@/data/SliderData'
import SliderItem from './SliderItem'
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from 'react-native-reanimated'
import Pagination from './Pagination'

type Props = {
    itemList: ImageSliderType[]
}

const {width} = Dimensions.get('screen');

const Slider = ({itemList} : Props) => {
    const scrollX = useSharedValue(0);
    const [paginationIndex, setPaginationIndex] = useState(0);
    const ref = useAnimatedRef<Animated.FlatList<any>>();
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const interval = useRef<NodeJS.Timeout>();
    const offset = useSharedValue(0);
    const maxOffset = width * (itemList.length - 1);

    const onScrollHandler = useAnimatedScrollHandler({
        onScroll: (e) => {
            scrollX.value = e.contentOffset.x;
        },
        onMomentumEnd: (e) => {
            offset.value = e.contentOffset.x;
        },
    });

    useEffect(() => {
        if (isAutoPlay) {
            interval.current = setInterval(() => {
                // Calculate next position with loop handling
                const nextOffset = offset.value + width;
                
                // If we've reached the end, reset to the beginning
                if (nextOffset > maxOffset) {
                    offset.value = 0;
                } else {
                    offset.value = nextOffset;
                }
            }, 5000);
        } else {
            clearInterval(interval.current);
        }

        return () => {
            clearInterval(interval.current);
        };
    }, [isAutoPlay, offset, width, maxOffset]);

    useDerivedValue(() => {
        scrollTo(ref, offset.value, 0, true);
    });

    const onViewableItemsChanged = ({viewableItems}: {viewableItems: ViewToken[]}) => {
        if(viewableItems[0]?.index !== undefined && viewableItems[0]?.index !== null)
            setPaginationIndex(viewableItems[0].index % itemList.length);
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };

    const viewabilityConfigCallbackPairs = useRef([
        {viewabilityConfig, onViewableItemsChanged}
    ]);

    const getItemLayout = (
        _: ArrayLike<ImageSliderType> | null | undefined, 
        index: number
      ) => ({
        length: width,
        offset: width * index,
        index,
      });

    return (
        <View>
            <Animated.FlatList 
                ref={ref}
                data={itemList}
                renderItem={({item, index}) => (
                    <SliderItem item={item} index={index} scrollX={scrollX}/> 
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onScroll={onScrollHandler}
                scrollEventThrottle={16}
                viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                onScrollBeginDrag={() => setIsAutoPlay(false)}
                onScrollEndDrag={() => setIsAutoPlay(true)}
                getItemLayout={getItemLayout}
                initialNumToRender={3}
                maxToRenderPerBatch={2}
                windowSize={5}
                removeClippedSubviews={true}keyExtractor={(item, index) => `slider-item-${index}`}
                
            />
            <Pagination 
                items={itemList} 
                scrollX={scrollX} 
                paginationIndex={paginationIndex}
            />
        </View>
    );
}

export default Slider;

const styles = StyleSheet.create({});