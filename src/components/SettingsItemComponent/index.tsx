import React from "react";
import {
  View,
  Text,
  Image as RNImage,
  ImageSourcePropType,
} from "react-native";
import { SvgProps } from "react-native-svg";

type Props = {
  title: string;
  subtitle?: string;
  Toggle?: boolean;
  SvgIcon?: React.FC<SvgProps>;
  Image?: ImageSourcePropType;
  Icon?: React.FC<SvgProps>;
};

const SettingsItemComponent = ({
  title,
  subtitle,
  SvgIcon,
  Image,
  Icon,
}: Props) => {
  return (
    <View className="flex-row justify-between items-center mt-[24px] ml-[24px]">

    

      {/* LEFT SIDE */}
      <View className="flex-row items-center">
        {SvgIcon ? (
          <SvgIcon />
        ) : Image ? (
          <RNImage
            source={Image}
            style={{ width: 48, height: 48 }}
            resizeMode="contain"
          />
        ) : null}

        <View className="ml-[12px]">
          <Text className="text-14 font-sans700">
            {title}
          </Text>
        </View>
      </View>

      {/* RIGHT SIDE */}
      <View className="flex-row items-center mr-[24px]">
        {subtitle && (
          <Text className="text-gray1 font-sans500 text-16">
            {subtitle}
          </Text>
        )}

        {Icon && <Icon />}
      </View>

    </View>
  );
};

export default SettingsItemComponent;