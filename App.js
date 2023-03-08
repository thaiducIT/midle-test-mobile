import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import BottomTabNavigator from './app/navigation/bottom_tab_navigation/BottomTabNavigation';

export default function App() {
  return (
    <BottomTabNavigator>

    </BottomTabNavigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
