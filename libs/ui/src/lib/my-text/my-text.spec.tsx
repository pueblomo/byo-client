import React from 'react';
import { render } from '@testing-library/react-native';

import MyText from './my-text';

describe('MyText', () => {
  it('should render successfully', () => {
    const { container } = render(<MyText />);
    expect(container).toBeTruthy();
  });
});
