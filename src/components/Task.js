import styles from '../styles/Task.module.css'

function Task({ children }) {
  return (
    <div className={styles.task}>
      <p>{children}</p>
    </div>
  )
}

export default Task
