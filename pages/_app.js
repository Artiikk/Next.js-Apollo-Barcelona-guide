import { ApolloProvider } from '@apollo/client'
import { client } from '../utils/helpers/apolloClient'
import '../styles/main.scss'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
