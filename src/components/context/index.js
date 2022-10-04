import {
    createContext
} from 'react';

const appContext = {
    skillViz: false
}

const Context = createContext(appContext);

export default Context;