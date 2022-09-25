import React from 'react';
import { render } from '@testing-library/react-native';

import MessageInput from './message-input';

describe('MessageInput', () => {
  it('should render successfully', () => {
    const { container } = render(<MessageInput />);
    expect(container).toBeTruthy();
  });
});
