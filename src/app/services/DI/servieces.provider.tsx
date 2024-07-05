import { AppProps } from 'next/app';
import { ServiceProvider } from './services.context';
import container from './services.di.container';

function servicesProvider({ Component, pageProps }: AppProps) {
  return (
    <ServiceProvider value={container}>
      <Component {...pageProps} />
    </ServiceProvider>
  );
}

export default servicesProvider;
