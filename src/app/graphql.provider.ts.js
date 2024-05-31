import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Создание HTTP link для отправки запросов к GraphQL серверу
const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql', // Укажите URL вашего GraphQL сервера
});

// Создание middleware для добавления заголовка авторизации к запросам


// Создание клиента Apollo с указанием link и кэша
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;

