import React from 'react';
// import axios from "axios";
// import logo from "./logo.svg";
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { Formik } from "formik";

import TodoForm from 'components/TodoForm';
import { RootState } from 'reducers';
import { ITodoState, actions } from 'reducers/todo';

const App: React.FC = () => {
  // axios.get(1);
  const dispatch = useDispatch();
  const todoState = useSelector<RootState, ITodoState>((state) => state.todo);

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <div>
          {todoState.map((todo, i) => (
            <div
              key={i}
              style={{ transition: 'all 0.3s ease' }}
              className={todo.active ? 'active' : ''}
            >
              {`${i}. ${todo.name} : ${todo.description}`}
              <button
                onClick={() => {
                  dispatch(actions.deleteTodo(i));
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  dispatch(actions.toggleTodo(i));
                }}
              >
                Toggle
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
};

export default App;
