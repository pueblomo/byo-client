import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface MyTextProps {
  children?: React.ReactNode;
}

export function MyText(props: MyTextProps) {
  return <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>;
}

export default MyText;
