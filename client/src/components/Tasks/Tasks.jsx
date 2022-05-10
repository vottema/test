import './Tasks.css'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchCheckAdmin, fetchUpdateTasks } from '../../redux/asyncActionCreators/tasksAAC';
const Tasks = ({ tasks }) => {
  const dispatch = useDispatch()
  const inputChangeText = useRef()

  useEffect(() => {
    dispatch(fetchCheckAdmin())
  }, [dispatch])

  const { admin } = useSelector(state => state.checkAdmin)

  const fulfilled = (event) => {
    const updateStatus = { id: event.target.id, status: 'fulfilled' }
    dispatch(fetchUpdateTasks(updateStatus))
  }

  const change = (event) => {
    const id = event.target.id
    const updateText = { id, text: event.target.changeText.value }
    dispatch(fetchUpdateTasks(updateText))
  }
  return (
    <>
      <div className='tasks'>
        {tasks.length ? tasks.map(task => (
          <div key={task.id} className="card border-success mx-2 task">
            <div className="card-header bg-transparent border-success">{`Name: ${task.name}`}</div>
            <div className="card-body text-success">
              <h5 className="card-title">{`Email: ${task.email}`}</h5>
              <p className="card-text">{`Text: ${task.text}`}</p>
            </div>
            <div className="card-footer bg-transparent border-success">
              {`Status: ${task.status}`}
              {task.change &&
                <div>{task.change}</div>
              }
            </div>
            <div className="card-footer bg-transparent border-success">
              {admin &&
                <>
                  <center>
                    <span>Status: </span>
                    <button id={task.id} onClick={fulfilled} type="submit" className="btn btn-primary statusBtn">Fulfilled</button>
                    <div className="card-footer bg-transparent border-success">
                      <form id={task.id} onSubmit={change}>
                        <input name='changeText' ref={inputChangeText} type="text" placeholder='text' />
                        <button type="submit" className="btn btn-primary saveBtn">Save</button>
                      </form>
                    </div>
                  </center>
                </>
              }
            </div>
          </div>
        )) : <div>NO DATA</div>}
      </div>
    </>
  );
};

export default Tasks;
