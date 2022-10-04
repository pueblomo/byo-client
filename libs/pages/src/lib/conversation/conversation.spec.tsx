import React from 'react';
import { render } from '@testing-library/react-native';

import Conversation from './conversation';

describe('Conversation', () => {
  it('should render successfully', async () => {
    const tree = render(<Conversation />);
    await new Promise((f) => setTimeout(f, 1000));
    expect(tree).toMatchSnapshot();
  });
});
