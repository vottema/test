import './Login.css'
import { useRef, useState } from 'react';

function Login(props) {
  const [status, setStatus] = useState()
  const inputName = useRef()
  const inputPassword = useRef()

  const loginAdmin = (event) => {
    event.preventDefault()

    const admin = {
      name: inputName.current.value,
      password: inputPassword.current.value,
    }
    fetch("/login", {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(admin),
    })
      .then(res => {
        if (res.status === 201) {
          setTimeout(() => {
            window.location.href = '/'
          }, 1000);
        }
        setStatus(res.status)
      })

  }
  return (
    <center>
      <form className='login' onSubmit={loginAdmin}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input ref={inputName} type="text" className="form-control" id="name" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input ref={inputPassword} type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <div>
        {status === 201 && <div className="alert alert-success" role="alert">
          Успешно
        </div>}
        {status === 500 && <div className="alert alert-danger" role="alert">
          Неверные данные
        </div>}
      </div>
    </center>
  );
}

export default Login;
