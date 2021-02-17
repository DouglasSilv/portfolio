import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient;

const createApolloClient = () =>
  new ApolloClient({
    link: new HttpLink({
      uri: process.env.GRAPHQL_URL,
    }),
    cache: new InMemoryCache(),
  });

export const initializeApollo = (initialState) => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (typeof window === 'undefined') return _apolloClient;

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
};

export const useApollo = (initialState) => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};

export const executeQueries = async (queries) => {
  const apolloClient = initializeApollo();
  let results = {};

  const requests = await Promise.all(
    queries.map((query) => {
      return apolloClient.query({
        query,
      });
    }),
  );

  requests.forEach((result) => {
    const data = result.data;
    results = {
      ...results,
      ...data,
    };
  });

  return results;
};
