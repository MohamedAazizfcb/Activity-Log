import { createContext, useContext } from 'react';
import container from './services.di.container';

const ServiceContext = createContext(container);

export const useServices = () => {
  return useContext(ServiceContext);
};

export const ServiceProvider = ServiceContext.Provider;
