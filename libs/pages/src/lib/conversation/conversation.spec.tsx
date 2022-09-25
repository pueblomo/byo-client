import React from 'react';
import { render } from '@testing-library/react-native';

import Conversation from './conversation';

describe('Conversation', () => {
  it('should render successfully', () => {
    const tree = render(<Conversation />);
    expect(tree).toMatchSnapshot();
  });
});
