import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from '@/theme';
import { Routes } from '@/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
