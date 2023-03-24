import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import todosReducer from "./services/reducers/todosReducer";

const store = createStore(todosReducer, applyMiddleware(thunk));

export default store;