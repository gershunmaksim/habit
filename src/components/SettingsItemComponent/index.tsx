import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image as RNImage,
  ImageSourcePropType,
} from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
  title: string;
  subtitle?: string;
  Toggle?: boolean;
  onPress?: () => void
  SvgIcon?: React.FC<SvgProps>;
  Image?: ImageSourcePropType;
  Icon?: React.FC<SvgProps>;
};

const SettingsItemComponent = ({
  title,
  subtitle,
  onPress,
  SvgIcon,
  Image,
  Icon,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} className="flex-row justify-between items-center mt-[24px]">
      <View className="flex-row items-center">
        {SvgIcon ? (
          <SvgIcon />
        ) : Image ? (
          <RNImage
            source={Image}
            resizeMode="contain"
            className="w-[48px] h-[48px]"
          />
        ) : null}

        <View className="ml-[12px]">
          <Text className="text-14 font-sans700">
            {title}
          </Text>
        </View>
      </View>
      <View className="flex-row items-center">
        {subtitle && (
          <Text className="text-gray1 font-sans500 text-16">
            {subtitle}
          </Text>
        )}
        {Icon && <Icon />}
      </View>
    </TouchableOpacity>
  );
};

export default SettingsItemComponent;