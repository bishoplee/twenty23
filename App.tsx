import { useEffect } from "react";
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, ScrollView, View, FlatList, ActivityIndicator } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';

import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { DancingScript_400Regular, DancingScript_500Medium } from '@expo-google-fonts/dancing-script';

import DayListItem from './src/components/core/DayListItem'

SplashScreen.preventAutoHideAsync()

const days = [...Array(24)].map((v, i) => i + 1)

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Indie: IndieFlower_400Regular,
    Dancing: DancingScript_400Regular,
    DancingMD: DancingScript_500Medium,
  })

  useEffect(() => {
    if(fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        renderItem={({ item }) => <DayListItem day={item} />}
        contentContainerStyle={styles.listView}
        columnWrapperStyle={styles.column}
        numColumns={3}
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listView: {
    gap: 10,
    padding: 16,
  },
  column: {
    gap: 10,
  },
});
