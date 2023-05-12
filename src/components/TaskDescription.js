import { Link, useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import styles from '../styles/TaskDescription.module.css'

function TaskDescription({ tasks, descriptionChange }) {
  const id = useParams().id
  const navigate = useNavigate()
  const task = tasks.find((task) => task.id === id)

  useEffect(() => {
    if (!task) {
      navigate('..', { relative: 'path' })
    }
  }, [task])

  return (
    <div className={styles.taskDescription}>
      <h3>{task?.text}</h3>
      <textarea
        type="text"
        value={task?.description}
        onChange={(event) => {
          descriptionChange(id, event)
        }}
        placeholder="This task has no description"
      >
        {task?.description}
      </textarea>
      <Link to="/" className={styles.btnClose}>
        X
      </Link>
    </div>
  )
}

export default TaskDescription
