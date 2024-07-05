import React, { createContext, useContext, ReactNode } from 'react';
import { ActivityService } from '../activity.service';

interface Dependencies {
  activityService: ActivityService;
}

const defaultDependencies: Dependencies = {
  activityService: new ActivityService(),
};

const DependencyContext = createContext<Dependencies>(defaultDependencies);

export const DependencyProvider = ({ children }: { children: ReactNode }) => {
    return (
        <DependencyContext.Provider value={defaultDependencies}>
            {children}
        </DependencyContext.Provider>
    );
};

export const useDependencies = () => {
    return useContext(DependencyContext);
};
