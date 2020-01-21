import { createStore} from 'redux';
import toDoReducer from './reducers/reducers.js'
// import thunk from 'redux-thunk';

const store = createStore(toDoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;