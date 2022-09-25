import React from 'react';
import { render } from '@testing-library/react-native';

import ConvBubble from './conv-bubble';

describe('ConvBubble', () => {
  it('should render successfully', () => {
    const tree = render(
      <ConvBubble isSelf={false}> Render incomming message </ConvBubble>
    );
    expect(tree).toMatchSnapshot();
  });

  it('should render self successfully', () => {
    const tree = render(
      <ConvBubble isSelf={true}> Render incomming message </ConvBubble>
    );
    expect(tree).toMatchSnapshot();
  });
});
