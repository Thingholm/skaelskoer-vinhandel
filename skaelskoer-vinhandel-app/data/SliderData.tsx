import { ImageSourcePropType } from "react-native";

export type ImageSliderType = {
    title: string;
    image: ImageSourcePropType;
    description: string;
};

export const ImageSlider = [
    {
        title: 'Den første vin',
        image: require('@/assets/images/vin1.png'),
        description: 'Rigtig dejlig vin',
    },
    {
        title: 'Den anden vin',
        image: require('@/assets/images/vin2.png'),
        description: 'Rigtig dejlig vin',
    },
    {
        title: 'Den tredje vin',
        image: require('@/assets/images/vin3.png'),
        description: 'Rigtig dejlig vin',
    },
    {
        title: 'Den fjerde vin',
        image: require('@/assets/images/vin4.png'),
        description: 'Rigtig dejlig vin',
    },   
];