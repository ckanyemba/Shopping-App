import MainLayout from '../src/components/layout/main-layout';
import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import { Main } from 'next/document';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <div className="wrapper">
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </div>
      </Provider>
    </>
  );
}

export default MyApp;