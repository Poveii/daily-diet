import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from '@/theme';
import { Home } from '@/screens/Home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
