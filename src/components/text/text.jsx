import * as React from 'react';
import {Text as ReactNativeText} from 'react-native-paper';

export const Text = ({
  title,
  children,
  style,
  variant = 'bodyMedium',
  fontWeight = 'normal',
  color = 'black',
  ...rest
}) => {
  // figure out which content to use
  const content = title || children;

  return (
    <ReactNativeText
      {...rest}
      style={[
        style,
        {
          color: color,
          fontWeight: fontWeight, // Default to normal if fontWeight prop is not provided
        },
      ]}
      variant={variant}>
      {content}
    </ReactNativeText>
  );
};
