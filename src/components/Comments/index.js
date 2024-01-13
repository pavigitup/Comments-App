import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentsList: [],
    ContainerBackgroundClassNames: initialContainerBackgroundClassNames,
  }

  inputText = event => {
    const {value} = event.target
    this.setState({name: value})
  }

  areaText = event => {
    const {value} = event.target
    this.setState({comment: value})
  }

  addComment = () => {
    const {name, comment} = this.state
    if (comment) {
      const newComment = {
        id: uuidv4(),
        name,
        comment,
      }
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        name: '',
        comment: '',
      }))
    }
  }

  render() {
    const {
      name,
      comment,
      ContainerBackgroundClassNames,
      commentsList,
    } = this.state
    return (
      <div className="bg-con">
        <div className="main-con">
          <div className="comment-con">
            <h1>Comments</h1>
            <p>Say something about 4.O Technologies</p>
            <input
              className="input"
              value={name}
              type="text"
              placeholder="Your Name"
              onChange={this.inputText}
            />
            <textarea
              placeholder="Your Comment"
              rows="5"
              cols="50"
              value={comment}
              onChange={this.areaText}
            />
            <button type="button" onClick={this.addComment}>
              Add Comment
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="comment-emoj"
            />
          </div>
        </div>
        <hr className="straight-line" />
        <div className="main-comment">
          <div className="check-box-con">
            <input type="checkbox" className="input-con" />
            <p style={{padding: '10px'}}>Comments</p>
          </div>
          <ul>
            {commentsList.map(commentItem => (
              <CommentItem key={commentItem.id} eachItem={commentItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
