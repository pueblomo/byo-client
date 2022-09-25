import React from 'react';

import { View, Text, StyleSheet, TextInput } from 'react-native';

/* eslint-disable-next-line */
export interface MessageInputProps {}

export function MessageInput(props: MessageInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message"
        style={{ color: '#79C7C5' }}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '8%',
  },
});

export default MessageInput;
