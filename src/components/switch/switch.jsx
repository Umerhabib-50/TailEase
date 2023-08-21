import React, {useState} from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-paper';
import {COLORS} from '../../constant';

export const Switchbtn = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Switch
        trackColor={{false: '#767577', true: '#767577'}}
        thumbColor={isEnabled ? COLORS.yellow : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
