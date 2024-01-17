import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';

type TextProps = RNTextProps & {
  fontType?: fontType;
};

type fontType = 'regularFont' | 'lightFont' | 'boldFont';

export const Text: React.FC<TextProps> = props => {
  const { fontType, style, ...rest } = props;

  let fontFamily;
  switch (fontType) {
    case 'lightFont':
      fontFamily = 'Merriweather-Light';
      break;
    case 'boldFont':
      fontFamily = 'Merriweather-Bold';
      break;
    default:
      fontFamily = 'Merriweather-Regular';
  }

  const fontStyles = {
    fontFamily,
  };

  return <RNText style={[fontStyles, style]} {...rest} />;
};
