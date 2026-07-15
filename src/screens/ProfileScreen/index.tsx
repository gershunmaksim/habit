import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HeaderComponent from "components/HeaderComponent";
import SettingsItemComponent from "components/SettingsItemComponent";
import LabelComponent from "components/LabelComponent";
import { useNavigation } from "@react-navigation/native";

import UnitIcon from "assets/icons/unit.svg";
import RightArrowIcon from "assets/icons/rightArrow.svg";
import BellIcon from "assets/icons/bell.svg";
import LanguageIcon from "assets/icons/language.svg";
import AffirmlyIcon from "assets/img/Affirmly.png";
import PillsIcon from "assets/img/pills-alert.png";
// TO DO: Import не на мiсцях, перевiрити
import { useTranslation } from "react-i18next";
import { useAppDispatch, useTypedSelector } from "store"
// TO DO: Import не на мiсцях, перевiрити
import moment from "moment"
import { setNotifications } from "store/auth/slice";

const ProfileScreen: React.FC = () => {
  const { notifications } = useTypedSelector((store) => store.auth)
  const dispatch = useAppDispatch()
  //State, params, redux
  const [isMoll, setIsMoll] = useState<"mmol/l" | "kmoll/l">("mmol/l")
  const navigation = useNavigation()
  const { t } = useTranslation()
  //Refs
  //Functions
  const handleChangeMol = () => {
    setIsMoll(prev => prev === "mmol/l" ? "kmoll/l" : "mmol/l")
  }
  const handleGoLanguage = () => {
    navigation.navigate("languages")
  }
  const handleToggleNotifications = () => {
    dispatch(setNotifications(!notifications))
  }
  //Hooks
  //Render
  return (
    <SafeAreaView className="flex-1 bg-white px-[24px]">

      <HeaderComponent title={t("settings")} />
      <LabelComponent title={t("special_settings")} />

      <SettingsItemComponent
        title={t("unit")}
        subtitle={isMoll}
        SvgIcon={UnitIcon}
        Icon={RightArrowIcon}
        onPress={handleChangeMol}
      />
      <LabelComponent
      title={t("general_settings")}/>

      <SettingsItemComponent
        title={t("notifications")}
        SvgIcon={BellIcon}
        isToggle
        value={notifications}
        onChange={handleToggleNotifications}      
      />

      <SettingsItemComponent
        title={t("language")}
        SvgIcon={LanguageIcon}
        Icon={RightArrowIcon}
        onPress={handleGoLanguage}
      />
      <LabelComponent
      title={t("our_other_applications")}/>

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