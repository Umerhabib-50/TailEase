import * as React from 'react';
import {Text as ReactNativeText} from 'react-native-paper';

export const Text = ({
  title,
  children,
  style,
  variant,
  fontWeight,
  color,
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
          color: color ? color : 'black',
          fontWeight: fontWeight ? fontWeight : 'normal', // Default to normal if fontWeight prop is not provided
        },
      ]}
      variant={variant}>
      {content}
    </ReactNativeText>
  );
};
