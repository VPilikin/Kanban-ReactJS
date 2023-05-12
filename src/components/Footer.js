import styles from '../styles/Footer.module.css'
import Counter from '../UI/Counter'

function Footer({ clear, ...props }) {
  return (
    <footer className={styles.footer} onDoubleClick={clear}>
      <div className={styles.counters}>
        <Counter title="backlog" {...props}>
          Active tasks
        </Counter>
        <Counter title="finished" {...props}>
          Finished tasks
        </Counter>
      </div>
      <p>{'Kanban board by <NAME>, <YEAR>'}</p>
    </footer>
  )
}

export default Footer
