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
    <View className="flex-row justify-between items-center mt-[24px]">
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
      {/* : Прибери mr-[24px], воно на головному екранi задаватиметься в SafeAreaView. Нiколи по кривому так не робити, що там вiдступ злiва, а там справа */}
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