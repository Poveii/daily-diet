import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import theme from '@/theme';
import { Routes } from '@/routes';

import { Loading } from '@/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Routes /> : <Loading logoShown />}
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
