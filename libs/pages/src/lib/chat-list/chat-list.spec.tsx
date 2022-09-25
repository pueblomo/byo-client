import React from 'react';
import { render } from '@testing-library/react-native';

import ChatList from './chat-list';

describe('ChatList', () => {
  it('should render successfully', () => {
    const { container } = render(<ChatList />);
    expect(container).toBeTruthy();
  });
});
