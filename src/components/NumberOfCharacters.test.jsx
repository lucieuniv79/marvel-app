import '@testing-library/jest-dom';
import '@testing-library/react';

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NumberOfCharacters } from './NumberOfCharacters';

describe('NumberOfCharacters Component', () => {
 
  test('should display "There is 1 character" when there is one character in the list', () => {
    render(<NumberOfCharacters characters={[{ id: 1, name: 'Iron Man' }]} />); })

});
