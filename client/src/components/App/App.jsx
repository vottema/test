import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { store } from '../../redux/store'
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import NewTask from "../NewTask/NewTask";
import Error404 from '../Error404/Error404'
import Login from "../Login/Login";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newTask" element={<NewTask />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

      </BrowserRouter>
    </Provider>
  );
}

export default App;
