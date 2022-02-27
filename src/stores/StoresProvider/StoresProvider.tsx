import React, {FC, createContext, ReactNode, ReactElement} from 'react';
import {RootStore} from '../rootStore';

export const StoreContext = createContext<RootStore>({} as RootStore);

export type StoreComponent = FC<{
    children: ReactNode;
}>;

export const StoreProvider: StoreComponent = ({children}): ReactElement => {
    const store = new RootStore()
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}