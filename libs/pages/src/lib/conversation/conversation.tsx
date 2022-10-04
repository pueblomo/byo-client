import React, { useState } from 'react';
import { Header } from '@rneui/base';

import { View, StyleSheet, ScrollView } from 'react-native';
import { ConvBubble, MessageInput } from '@byo-client/ui';
import LinearGradient from 'react-native-linear-gradient';
import { white } from '@byo-client/global';

/* eslint-disable-next-line */
export interface ConversationProps {}

export interface Message {
  isSelf: boolean;
  content: string;
}

export function Conversation(props: ConversationProps) {
  const [messages, setMessages] = useState<Message[]>([
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'lkajsdlkjask alsdkjalkjd alsdkjlka dalkj' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: false, content: 'Hamena' },
    { isSelf: true, content: 'Nerv nicht' },
  ]);
  const scrollViewRef = React.useRef<ScrollView>(null);

  function onClick(text: string) {
    setMessages([...messages, { isSelf: true, content: text }]);
  }

  return (
    <View style={styles.container}>
      <Header
        centerComponent={{ text: 'Peter Schwanz' }}
        backgroundColor="#ffffff"
      />

      <LinearGradient colors={[white, white]} style={styles.gradient}>
        <ScrollView
          ref={scrollViewRef}
          onContentSizeChange={() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
          }}
        >
          <View style={styles.bubbleContainer}>
            {messages.map((message, key) => (
              <ConvBubble key={key} isSelf={message.isSelf}>
                {message.content}
              </ConvBubble>
            ))}
          </View>
        </ScrollView>
      </LinearGradient>
      <MessageInput onClick={onClick} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  bubbleContainer: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});

export default Conversation;
