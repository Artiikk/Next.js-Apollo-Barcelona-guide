import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://barcelona-urban-mobility-graphql-api.netlify.app',
  cache: new InMemoryCache(),
  fetchOptions: { mode: 'no-cors' },
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
})