import React, { useState } from 'react';
import { Header } from '@rneui/base';

import { View, StyleSheet, ScrollView } from 'react-native';
import { ConvBubble, MessageInput } from '@byo-client/ui';
import LinearGradient from 'react-native-linear-gradient';

/* eslint-disable-next-line */
export interface ConversationProps {}

export interface Message {
  isSelf: boolean;
  content: string;
}

export function Conversation(props: ConversationProps) {
  const [messages, setMessages] = useState<Message[]>([
    { isSelf: true, content: 'Nerv nicht' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'lkajsdlkjask alsdkjalkjd alsdkjlka dalkj' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'Hamena' },
  ]);
  return (
    <View style={styles.container}>
      <Header centerComponent={{ text: 'Peter Schwanz' }} />

      <LinearGradient colors={['#79C7C5', '#F9FBFF']} style={styles.gradient}>
        <ScrollView>
          <View style={styles.bubbleContainer}>
            {messages.map((message, key) => (
              <ConvBubble key={key} isSelf={message.isSelf}>
                {message.content}
              </ConvBubble>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
      <MessageInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bubbleContainer: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Conversation;
