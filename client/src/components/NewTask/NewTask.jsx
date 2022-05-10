import './NewTask.css'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAddTask } from '../../redux/asyncActionCreators/tasksAAC'

function NewTask(props) {
  const dispatch = useDispatch()

  const inputName = useRef()
  const inputEmail = useRef()
  const inputText = useRef()

  const addTask = (event) => {
    event.preventDefault()

    const newTask = {
      name: inputName.current.value,
      email: inputEmail.current.value,
      text: inputText.current.value,
      status: 'pending',
      change: ''
    }

    dispatch(fetchAddTask(newTask))

    event.target.reset()
  }

  return (
    <center>
      <form className='newTask' onSubmit={addTask}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input ref={inputName} type="text" className="form-control" id="name" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input ref={inputEmail} type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Text</label>
          <input ref={inputText} type="text" className="form-control" id="text" required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </center>
  );
}

export default NewTask;
