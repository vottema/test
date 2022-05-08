import { checkAdmin } from "../actionCreators/adminAC";
import { addTaskAC, initTaskAC } from "../actionCreators/tasksAC";

export const fetchAddTask = (payload) => {
  return (dispatch) => {
    fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 201) {
          let div = document.querySelector(".newTask");

          div.insertAdjacentHTML(
            "afterend",
            '<div>Good</div>'
          );
          setTimeout(() => {
            window.location.href = 'http://localhost:3000'
          }, 1000);
        } else {
          let div = document.querySelector(".newTask");

          div.insertAdjacentHTML(
            "afterend",
            '<div>Bad</div>'
          );
        }
        res.json();
      })
      .then((newTask) => dispatch(addTaskAC(newTask)));
  };
};

export const fetchInitTasks = (payload) => {
  return (dispatch) => {
    fetch("http://localhost:4000/tasks/sort", {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(initTaskAC(data));
      })
      .catch((err) => console.log(err.message));
  };
};
export const fetchUpdateTasks = (payload) => {
  return () => {
    fetch("http://localhost:4000/tasks/update", {
      credentials: "include",
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((data) => {
        if (data.status === 500) {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch((err) => console.log(err.message));
  };
};
export const fetchCheckAdmin = () => {
  return (dispatch) => {
    fetch("http://localhost:4000/", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(checkAdmin(data));
      })
      .catch((err) => console.log(err.message));
  };
};
