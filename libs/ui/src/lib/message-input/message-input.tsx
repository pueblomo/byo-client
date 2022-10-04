import { primary } from '@byo-client/global';
import { Button } from '@rneui/base';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { View, StyleSheet, TextInput } from 'react-native';

/* eslint-disable-next-line */
export interface MessageInputProps {
  onClick: (text: string) => void;
}

export function MessageInput(props: MessageInputProps) {
  const [text, onChangeText] = React.useState('');

  function onPress() {
    props.onClick(text);
    onChangeText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type your message"
        placeholderTextColor={primary}
        style={{ color: primary, width: '80%' }}
        value={text}
        onChangeText={onChangeText}
      />
      <Button
        buttonStyle={{
          borderWidth: 0,
          borderRadius: 30,
          padding: 5,
        }}
        containerStyle={{
          marginRight: 10,
          width: 50,
        }}
        onPress={onPress}
      >
        <Icon name="send" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: '8%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default MessageInput;
