import { produce } from 'immer';
import { Reducer } from 'redux';
import { ActionType, createAction, getType } from 'typesafe-actions';

/*
 * state
 */

interface ITodo {
  name: string;
  description: string;
  active?: boolean;
}

export type ITodoState = Array<ITodo>;

const initialState: ITodoState = [];

/*
 * action types
 */
const ADD_TODO = 'todo/ADD_TODO';
const UPDATE_TODO = 'todo/UPDATE_TODO';
const TOGGLE_TODO = 'todo/TOGGLE_TODO';
const DELETE_TODO = 'todo/DELETE_TODO';

/*
 * action creators
 */

export const actions = {
  addTodo: createAction(ADD_TODO)<ITodo>(),
  updateTodo: createAction(UPDATE_TODO)<{ index: number; todo: ITodo }>(),
  toggleTodo: createAction(TOGGLE_TODO)<number>(),
  deleteTodo: createAction(DELETE_TODO)<number>(),
};

export type TActions = ActionType<typeof actions>;

const reducer: Reducer<ITodoState, TActions> = (
  state = initialState,
  action,
) => {
  return produce<ITodoState>(state, (draft) => {
    switch (action.type) {
      case getType(actions.addTodo): {
        const { name, description } = action.payload;
        draft.push({
          name,
          description,
          active: true,
        });
        break;
      }
      case getType(actions.updateTodo): {
        const { name, description, active } = action.payload.todo;
        draft[action.payload.index] = {
          name,
          description,
          active,
        };
        break;
      }
      case getType(actions.toggleTodo): {
        draft[action.payload].active = !draft[action.payload].active;
        break;
      }
      case getType(actions.deleteTodo): {
        draft.splice(action.payload, 1);
        break;
      }
    }
  });
};

export default reducer;
