import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderComponent from "components/HeaderComponent";
import SettingsItemComponent from "components/SettingsItemComponent";

import UnitIcon from "assets/icons/unit.svg";
import RightArrowIcon from "assets/icons/rightArrow.svg";
import BellIcon from "assets/icons/bell.svg";
import LanguageIcon from "assets/icons/language.svg";
import AffirmlyIcon from "assets/img/Affirmly.png";
import PillsIcon from "assets/img/pills-alert.png";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">

      <HeaderComponent title="Settings" />

      <View className="ml-[24px]">
        <Text className="text-base text-gray2 font-sans400">
          Special Settings
        </Text>
      </View>

      <SettingsItemComponent
        title="Unit"
        subtitle="mmol/l"
        SvgIcon={UnitIcon}
        Icon={RightArrowIcon}
      />

      <View className="ml-[24px] mt-[24px]">
        <Text className="text-base text-gray2 font-sans400">
          General Settings
        </Text>
      </View>

      <SettingsItemComponent
        title="Notifications"
        SvgIcon={BellIcon}
        Icon={RightArrowIcon}
      />

      <SettingsItemComponent
        title="Language"
        SvgIcon={LanguageIcon}
        Icon={RightArrowIcon}
      />

      <View className="ml-[24px] mt-[24px]">
        <Text className="text-base text-gray2 font-sans400">
          Our other applications
        </Text>
      </View>

      <SettingsItemComponent
        title="Affirmly"
        Image={AffirmlyIcon}
        Icon={RightArrowIcon}
      />

      <SettingsItemComponent
        title="PillsAlert"
        Image={PillsIcon}
        Icon={RightArrowIcon}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;