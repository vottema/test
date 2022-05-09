import { createStore, applyMiddleware } from 'redux'
import  {  devToolsEnhancer  } from 'redux-devtools-extension/logOnlyInProduction'
import { rootReducer } from './reducers/rootReducer'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, devToolsEnhancer(applyMiddleware(thunk)))
