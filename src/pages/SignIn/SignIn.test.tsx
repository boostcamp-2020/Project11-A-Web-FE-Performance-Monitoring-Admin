import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getByAltText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import rootReducer from '@store/store';
import { createStore } from 'redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from '@themes/index';
import SignIn from './SignIn';

const server = setupServer(
  rest.post(`${process.env.API_URL}/api/auth/login`, (req, res, ctx) => {
    // Respond with a mocked user token that gets persisted
    // in the `sessionStorage` by the `SignIn` component.
    return res(ctx.json({ token: 'mocked_user_token' }));
  }),
);
// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const store = createStore(rootReducer);

test('allows the user to log in', async () => {
  render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <SignIn />
      </MuiThemeProvider>
    </Provider>,
  );
  userEvent.type(
    screen.getByRole('textbox', { name: /Email Address/i }),
    'john.maverick',
  );
  // userEvent.type(
  //   screen.getByRole('textbox', { name: /password/i }),
  //   'super-secret',
  // );
  userEvent.click(screen.getByRole('button', { name: /Sign In$/i }));
  await waitFor(() => getByText(/logged out/i));
  // Assert successful login state
  expect(window.localStorage.getItem('token')).toEqual('mocked_user_token');
});
