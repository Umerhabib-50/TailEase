import React from 'react';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Text, TextInput} from 'react-native-paper';
import styles from './input.styles';
import {COLORS} from '../../constant';
export const CustomInput = ({control, name, label, errors}) => {
  return (
    <>
      <View>
        <Controller
          control={control}
          name={name}
          rules={{
            required: true,
            minLength:
              name == 'phoneNo'
                ? {
                    value: 11,
                    message: 'PHone number must have at 11 digits',
                  }
                : null,
          }}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <View>
                <TextInput
                  style={styles.textInputView}
                  label={label}
                  value={value}
                  onChangeText={onChange}
                  mode="outlined"
                  activeOutlineColor={COLORS.purple}
                />
              </View>
            );
          }}
        />
        {errors[name] && (
          <Text style={{color: 'red'}}>
            {errors[name].message == ''
              ? `${label} is Required`
              : errors[name].message}
          </Text>
        )}
      </View>
    </>
  );
};
