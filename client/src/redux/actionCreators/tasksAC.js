import { INIT_TASKS, ADD_TASK, UPDATE_TASK } from "../actionTypes/tasksAT";

export const addTaskAC = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};
export const updateStatusAC = (payload) => {
  return {
    type: UPDATE_TASK,
    payload,
  };
};

export const initTaskAC = (payload) => {
  return {
    type: INIT_TASKS,
    payload,
  };
};
