import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchInitTasks } from '../../redux/asyncActionCreators/tasksAAC';

function Select(props) {
  const [payload, setPayload] = useState({})
  const dispatch = useDispatch()

  const value = (event) => {
    switch (event.target.value) {
      case '1': return setPayload({ column: "name", order: "ASC" })
      case '2': return setPayload({ column: "name", order: "DESC" })
      case '3': return setPayload({ column: "email", order: "ASC" })
      case '4': return setPayload({ column: "email", order: "DESC" })
      case '5': return setPayload({ column: "status", order: "ASC" })
      case '6': return setPayload({ column: "status", order: "DESC" })
      default: return undefined
    }
  }
  useEffect(() => {
    dispatch(fetchInitTasks(payload))
  }, [payload, dispatch])


  return (
    <select onChange={value} className="form-select" aria-label="Default select example">
      <option >Фильтр</option>
      <option value="1">Сортировать по имени возр.</option>
      <option value="2">Сортировать по имени убыв.</option>
      <option value="3">Сортировать по email возр.</option>
      <option value="4">Сортировать по email убыв.</option>
      <option value="5">Сортировать по статусу выполнено</option>
      <option value="6">Сортировать по статусу ожидание</option>
    </select>
  );
}

export default Select;
