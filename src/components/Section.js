import styles from '../styles/Section.module.css'
import Task from './Task'
import FormTask from './FormTask'

function Section({ children, tasks, title, ...props }) {
  const thisTasks = tasks.filter((task) => task.section === title)

  return (
    <section className={styles.section}>
      <h2>{children}</h2>
      {thisTasks.map((task) => (
        <Task key={task.id}>{task.text}</Task>
      ))}
      <FormTask tasks={tasks} title={title} {...props} />
    </section>
  )
}

export default Section
