import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./components/services/reducer/todosreducer";

const store = createStore(todoReducer,applyMiddleware(thunk));

export default store;