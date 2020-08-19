import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
    // automatically unmount and cleanup DOM after the test is finished.
    afterEach(cleanup);

    it('renders without error', () => {
        render(<Button>Hello World</Button>);
    });
});