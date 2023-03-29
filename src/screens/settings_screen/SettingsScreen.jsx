import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.subSection}>
        <Text style={styles.subHeader}>Notifications</Text>
        <Switch
          onValueChange={handleNotificationsToggle}
          value={notificationsEnabled}
        />
      </View>

      <View style={styles.subSection}>
        <Text style={styles.subHeader}>Dark Mode</Text>
        <Switch
          onValueChange={handleDarkModeToggle}
          value={darkModeEnabled}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  subHeader: {
    fontSize: 16,
  },
});

export default SettingScreen;