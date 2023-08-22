import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {Text, TextInput} from 'react-native-paper';
import see from '../../assets/eye.png';
import hide from '../../assets/hide.png';
import styles from './input.styles';
import {COLORS} from '../../constant';

export const CustomInput = ({
  control,
  name,
  label,
  errors,
  password,
  keyboardType,
}) => {
  const [show, setShow] = useState(password ? true : false);

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
                    message: 'Phone number must have at 11 digits',
                  }
                : null,
          }}
          render={({field: {onChange, onBlur, value}}) => {
            return (
              <View>
                <TextInput
                  keyboardType={keyboardType}
                  style={styles.textInputView}
                  label={label}
                  value={value}
                  onChangeText={onChange}
                  mode="outlined"
                  activeOutlineColor={COLORS.purple}
                  maxLength={name == 'phoneNo' ? 11 : null}
                  secureTextEntry={show}
                  right={
                    password ? (
                      <TextInput.Icon
                        onPress={() => {
                          setShow(!show);
                        }}
                        icon={() => {
                          return (
                            <Image
                              style={{width: 20, height: 20}}
                              source={show ? hide : see}
                            />
                          );
                        }}
                      />
                    ) : null
                  }
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
