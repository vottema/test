import { checkAdmin } from "../actionCreators/adminAC";
import { addTaskAC, initTaskAC } from "../actionCreators/tasksAC";

export const fetchAddTask = (payload) => {
  return (dispatch) => {
    fetch("/tasks", {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 201) {
          let div = document.querySelector(".newTask");

          div.insertAdjacentHTML("afterend", "<div>Good</div>");
          setTimeout(() => {
            window.location.href = "/";
          }, 1000);
        } else {
          let div = document.querySelector(".newTask");

          div.insertAdjacentHTML("afterend", "<div class='mess'>Bad</div>");
          setTimeout(() => {
            let delDiv = document.querySelector(".mess");
            delDiv.remove();
          }, 2000);
        }
        res.json();
      })
      .then((newTask) => dispatch(addTaskAC(newTask)));
  };
};

export const fetchInitTasks = (payload) => {
  return (dispatch) => {
    fetch("/tasks/sort", {
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
    fetch("/tasks/update", {
      credentials: "include",
      method: "PUT",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(payload),
    })
      .then((data) => {
        if (data.status === 500) {
          window.location.href = "/login";
        }
      })
      .catch((err) => console.log(err.message));
  };
};
export const fetchCheckAdmin = () => {
  return (dispatch) => {
    fetch("/checkAdmin", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => dispatch(checkAdmin(data.admin)))
      .catch((err) => console.log(err.message));
  };
};
