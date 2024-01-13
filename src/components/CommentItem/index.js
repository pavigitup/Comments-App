import {Component} from 'react'
import './index.css'

// CommentItem Component
class CommentItem extends Component {
  render() {
    const {eachItem} = this.props

    return (
      <li key={eachItem.id}>
        <h1 className={eachItem.name}>{eachItem.name}</h1>
        <p>{eachItem.comment}</p>
      </li>
    )
  }
}

export default CommentItem
