import { createContext } from 'react';

export const AccountContext = createContext({
    authenticated: false,
    setAuthenticated: (auth) => { }
});
