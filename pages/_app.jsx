import { ApolloProvider } from '@apollo/client';
import { any } from 'prop-types';
import { useApollo } from '../config/apolloClient';
import { GlobalStyle } from '../config/GlobalStyle';
import { DefaultSeo } from 'next-seo';
import { configSEO } from '../next-seo.config';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <DefaultSeo {...configSEO} />
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: any,
  pageProps: any,
};
