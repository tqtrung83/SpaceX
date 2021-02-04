import './App.css';
import logo from './logo.png';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import Launches from './components/Launches';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={logo}
          alt='SpaceX'
          style={{ width: 200, display: 'block', margin: 'auto' }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
