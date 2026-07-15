//TO DO: Import не на мiсцях, перевiрити
import { useNavigation } from "@react-navigation/native"
import HeaderComponent from "components/HeaderComponent"
import React, { useState } from "react"
import { FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import LanguageComponent from "components/LanguageComponent"
import { useTranslation } from "react-i18next"
import { useAppDispatch, useTypedSelector } from "store"
import ButtonComponent from "components/ButtonComponent"
import { Mood, moods } from "data/MoodData"
import { setMood } from "store/auth/slice"
// TO DO: Убрати пустi рядки тут. Для краси та чистоти

const MoodScreen: React.FC = () => {
  const { mood } = useTypedSelector((store) => store.auth)

  const [selectedMood, setSelectedMood] = useState(mood)
  const { t, i18n } = useTranslation()
  const navigation = useNavigation()
  const dispatch = useAppDispatch()
  const handleGoBack = () => {
    navigation.goBack()
  }
  const handleChangeMood = () => {
    dispatch(setMood(selectedMood))
    navigation.goBack()
  }

  const renderItem = (item: Mood) => {
    const isActive = item.mood === selectedMood
    return (
      <LanguageComponent
        title={t(item.mood)} 
        isActive={isActive}      
        onPress={() => setSelectedMood(item.mood)}
      />
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-white mx-[20px]">
      <HeaderComponent title={t("mood")} isArrowLeft onPressArrowLeft={handleGoBack} />
      {/* TO DO: Убрати пустi рядки тут. Для краси та чистоти */}
      <View>
        <FlatList 
          data={moods}
          renderItem={({item}) => renderItem(item)}
        />
      </View>
      {/* TO DO: Убрати пустi рядки тут. Для краси та чистоти */}
      <View className="absolute bottom-[32px] w-full">
        <ButtonComponent
          onPress={handleChangeMood}
          title={t("save_mood")}
        />
      </View>
    </SafeAreaView>
  )
}

export default MoodScreen
