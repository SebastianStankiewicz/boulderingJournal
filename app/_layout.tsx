import { SplashScreen, Stack } from "expo-router";
import {useFonts} from "expo-font";
import "./global.css";
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Futura-bold": require('../assets/fonts/Futura-Bold.ttf')
  })

  useEffect( () => {
    if (fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [])

  if (!fontsLoaded) return null;

  return <Stack screenOptions={{headerShown: false}} />;
}
