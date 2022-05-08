import React, { useState } from 'react';
import Tasks from '../Tasks/Tasks';
import Pagination from '../Pagination/Pagination';
import { useSelector } from 'react-redux';
import Select from '../Select/Select';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tasksPerPage] = useState(3);

  const { tasks } = useSelector(state => state.tasksReducer)


  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Tasks</h1>
      <Select />
      <Tasks tasks={currentTasks} />
      <Pagination
        tasksPerPage={tasksPerPage}
        totalTasks={tasks.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Home;
