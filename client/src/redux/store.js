import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'
const composeEnhancers = composeWithDevTools({});
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
