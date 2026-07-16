// React Native and Components
import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React, { useState } from "react"
import { FlatList, TextInput, View } from "react-native"
import LanguageComponent from "components/LanguageComponent"
import { SafeAreaView } from "react-native-safe-area-context"
import { useTranslation } from "react-i18next"
import ButtonComponent from "components/ButtonComponent"
//Libraries
import { Language, languages } from "data/LanguageData"
//Hooks and Redux
import { useAppDispatch, useTypedSelector } from "store"
import { setLanguage } from "store/auth/slice"
//styles and Icons
import SearchIcon from "assets/icons/search.svg"

const LanguagesScreen: React.FC = () => {
  const { language } = useTypedSelector((store) => store.auth)

  const [selectedLanguage, setSelectedLanguage] = useState(language)
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleChangeLanguage = () => {
    i18n.changeLanguage(selectedLanguage)
    dispatch(setLanguage(selectedLanguage))
    navigation.goBack()
  }

  const renderItem = (item: Language) => {
    const isActive = item.code === selectedLanguage
    return (
      <LanguageComponent
        key={item.code}
        title={item.language}
        isActive={isActive}
        onPress={() => setSelectedLanguage(item.code)}
      />
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white mx-[20px]">
      <HeaderComponent title={t("languages")} isArrowLeft onPressArrowLeft={handleGoBack} />
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 10,
          boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
          marginTop: 16,
        }}
        className="flex-row px-[17px] py-[16px] rounded-10 border-1 border-white1">
          <View className="flex-row items-center">
            <SearchIcon/>
            <TextInput 
              className=" text-16 font-sans500 ml-[10px]"
              placeholder={t("search")}
            />
          </View>
      </View>
      <View>
        <FlatList 
          data={languages}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
      <View className="absolute bottom-[32px] w-full">
        <ButtonComponent onPress={handleChangeLanguage} title={t("select_language")}/>
      </View>
    </SafeAreaView>
  )
}

export default LanguagesScreen
