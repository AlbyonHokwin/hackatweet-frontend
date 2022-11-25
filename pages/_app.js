import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import tweets from '../reducers/tweets';
import user from '../reducers/user';
import likes from "../reducers/likes";

const store = configureStore({
  reducer: { tweets, user, likes }
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Next.js App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
