import { useEffect } from "react";
import { fetchCheckAdmin } from "../../redux/asyncActionCreators/tasksAAC";
import { useSelector, useDispatch } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCheckAdmin())
  }, [dispatch])
  const { admin } = useSelector(state => state.checkAdmin)

  const logout = () => {
    fetch('/logout', {
      credentials: 'include'
    })
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Test</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                {admin ? <a className="nav-link" href='/' onClick={logout}>Logout</a> :
                  <a className="nav-link" href="login">Login</a>
                }
              </li>
              <li className="nav-item">
                <a className="nav-link" href="newTask">Add Task</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
