import { INIT_TASKS, ADD_TASK } from "../actionTypes/tasksAT";
const initialState = { tasks: [] };

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_TASKS:
      return { ...state, tasks: action.payload };

    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    default:
      return state;
  }
};
