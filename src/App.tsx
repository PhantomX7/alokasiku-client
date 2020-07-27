import React from 'react';
// import axios from "axios";
// import logo from "./logo.svg";
// import { useDispatch } from 'react-redux';
// import { Formik } from "formik";

// import TodoForm from 'components/TodoForm';
// import { RootState } from 'reducers';
// import { ITodoState, actions } from 'reducers/todo';

import Router from 'Router';

import './App.css';

const App: React.FC = () => {
  // axios.get(1);
  // const dispatch = useDispatch();
  // const todoState = useSelector<RootState, ITodoState>((state) => state.todo);

  return (
    <div className="App">
      <Router />
    </div>
  );
};

export default App;
