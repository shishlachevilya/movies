import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import router from './router';
import { SERVER_URL } from './constants/settings';

import './index.scss';
import './i18n';

const client = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <Suspense fallback="loading">
          <RouterProvider router={router} />
        </Suspense>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
);
