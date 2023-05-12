import { Link } from 'react-router-dom'
import styles from '../styles/Task.module.css'

function Task({ children, id }) {
  return (
    <Link to={id} className={styles.task}>
      <p>{children}</p>
    </Link>
  )
}

export default Task
