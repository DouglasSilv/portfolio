import { ApolloProvider } from '@apollo/client';
import { any } from 'prop-types';
import { useApollo } from '../config/apolloClient';
import { GlobalStyle } from '../config/GlobalStyle';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: any,
  pageProps: any,
};
