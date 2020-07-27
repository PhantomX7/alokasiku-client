import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { actions } from 'reducers/todo';

const TodoForm = () => {
  const dispatch = useDispatch();

  type TTodo = {
    name: string;
    description: string;
  };

  const { handleSubmit, handleChange, values, errors } = useFormik<TTodo>({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: Yup.object<TTodo>({
      name: Yup.string().required('required'),
      description: Yup.string().required('required'),
    }),
    onSubmit: (values) => {
      dispatch(actions.addTodo(values));
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={handleChange}
        value={values.name}
      />
      {errors.name ?? errors.name}
      <br />
      <label htmlFor="description">Description: </label>
      <input
        id="description"
        name="description"
        type="text"
        onChange={handleChange}
        value={values.description}
      />
      {errors.description ?? errors.description}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
