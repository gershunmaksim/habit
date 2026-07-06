import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderComponent from "components/HeaderComponent";
import SettingsItemComponent from "components/SettingsItemComponent";
import LabelComponent from "components/LabelComponent";

import UnitIcon from "assets/icons/unit.svg";
import RightArrowIcon from "assets/icons/rightArrow.svg";
import BellIcon from "assets/icons/bell.svg";
import LanguageIcon from "assets/icons/language.svg";
import AffirmlyIcon from "assets/img/Affirmly.png";
import PillsIcon from "assets/img/pills-alert.png";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">

      <HeaderComponent title="Settings" />
      <LabelComponent
      title={"Special Settings"}/>

      <SettingsItemComponent
        title="Unit"
        subtitle="mmol/l"
        SvgIcon={UnitIcon}
        Icon={RightArrowIcon}
      />
      <LabelComponent
      title={"General Settings"}/>

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
      <LabelComponent
      title={"Our other applications"}/>

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