import { useEffect } from "react";

import { Stack } from "expo-router"
import * as SplashScreen from 'expo-splash-screen';

import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';
import { DancingScript_400Regular, DancingScript_500Medium } from '@expo-google-fonts/dancing-script';

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
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
    <Stack screenOptions={{}}>
      <Stack.Screen name="index" options={{ title: "Twenty23" }} />
    </Stack>
  )
}

export default RootLayout