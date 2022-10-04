import React, { useEffect, useRef } from 'react';

import { StyleSheet, Animated } from 'react-native';
import MyText from '../my-text/my-text';
import DropShadow from 'react-native-drop-shadow';
import { dark23, primary, white } from '@byo-client/global';

/* eslint-disable-next-line */
export interface ConvBubbleProps {
  isSelf: boolean;
  children?: React.ReactNode;
}

export function ConvBubble(props: ConvBubbleProps) {
  const appliedStyles = [];
  const translation = useRef(new Animated.Value(-50)).current;
  const translationSelf = useRef(new Animated.Value(50)).current;

  useEffect(() => {
    Animated.timing(translation, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationSelf, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, [translation, translationSelf]);

  appliedStyles.push(styles.container);
  if (props.isSelf) {
    appliedStyles.push(styles.self);
    appliedStyles.push({ transform: [{ translateX: translationSelf }] });
  } else {
    appliedStyles.push({ transform: [{ translateX: translation }] });
  }

  return (
    <DropShadow style={styles.shadowProp}>
      <Animated.View style={appliedStyles}>
        <MyText style={styles.text}>{props.children}</MyText>
      </Animated.View>
    </DropShadow>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  container: {
    maxWidth: '60%',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    backgroundColor: dark23,
    alignSelf: 'flex-start',
  },
  self: {
    alignSelf: 'flex-end',
    backgroundColor: primary,
  },
  text: {
    color: white,
  },
});

export default ConvBubble;
