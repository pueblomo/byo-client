import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface MyTextProps {
  children?: React.ReactNode;
  style?: any;
}

export function MyText(props: MyTextProps) {
  const appliedStyles = [];
  appliedStyles.push({ fontWeight: 'bold' });
  if (props.style) {
    appliedStyles.push(props.style);
  }
  return <Text style={appliedStyles}>{props.children}</Text>;
}

export default MyText;
