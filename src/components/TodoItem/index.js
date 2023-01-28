// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodoList, onDeleteLine} = props
  const {title, id} = initialTodoList
  const onDelete = () => {
    onDeleteLine(id)
  }
  return (
    <li className="list-align">
      <p>{title}</p>
      <button type="button" onClick={onDelete} className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
