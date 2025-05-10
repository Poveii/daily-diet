import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';

import { AppRoutes } from './app.routes';

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.GRAY_700 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}
