import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Switch, useTheme } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function SwitchButton() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const theme = useTheme();

  return (
    <Layout style={styles.row}>
      <Text style={{ color: theme['color-basic-100'] }}>Enable Dark Mode</Text>
      <Switch
        checked={isEnabled}
        onChange={toggleSwitch}
        thumbTintColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
        trackTintColor={{ true: theme['color-basic-800'], false: theme['color-basic-500'] }[isEnabled]}
        ios_backgroundColor={{ true: theme['color-basic-800'], false: theme['color-basic-500'] }[isEnabled]}
      />
    </Layout>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});
