import React from "react"; 
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import App from "../../client/src/App";

describe('App', () => {

  beforeEach(() => {
    const app = render(<App />);
  });

  test('', () => {

    userEvent.type(screen.getByPlaceHolderText)

  });

});