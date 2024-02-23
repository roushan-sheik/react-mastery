import { axios } from "axios";
import React from "react";
import { applyMiddleware, createStore } from "react-redux";
import { thunk } from "redux-thunk";
// state
// dispatch / action
// reducer
// store
// TODO- https://jsonplaceholder.typicode.com/todos
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILD = "GET_TODO_FAILD";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
// state
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
// dispatch /action
function getTodoRequest() {
  return {
    type: GET_TODO_REQUEST,
  };
}
function getTodoFaild(error) {
  return {
    type: GET_TODO_FAILD,
    payload: error,
  };
}
function getTodoSuccess(todos) {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
}
// dispatch
// todos: []
// isLoading: false
// error: null

function reducer(state, action) {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODO_FAILD:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
}
// async function fetch data
function fetchData() {
  return (reducer) => {
    reducer(getTodoRequest());
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
}
// store
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
const TodoRoot = () => {
  return <div>TodoRoot</div>;
};

export default TodoRoot;
