import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class TododDetails extends Component {
  state = {TodoList: initialTodosList}

  onDeleteLine = id => {
    const {TodoList} = this.state
    const filterdData = TodoList.filter(each => each.id !== id)
    this.setState({TodoList: filterdData})
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Simple Todos</h1>
          <ul>
            {initialTodosList.map(each => (
              <TodoItem
                initialTodoList={each}
                id={each.id}
                onDeleteLine={this.onDeleteLine}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default TododDetails
