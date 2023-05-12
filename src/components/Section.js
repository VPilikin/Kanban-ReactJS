import styles from '../styles/Section.module.css'
import Task from './Task'
import FormTask from './FormTask'

function Section({ children, tasks, title, onClickTask, ...props }) {
  const thisTasks = tasks.filter((task) => task.section === title)

  return (
    <section className={styles.section}>
      <h2>{children}</h2>
      <div className={styles.tasks}>
        {thisTasks.map((task) => (
          <Task key={task.id} id={task.id} onClickTask={onClickTask}>
            {task.text}
          </Task>
        ))}
        <FormTask tasks={tasks} title={title} {...props} />
      </div>
    </section>
  )
}

export default Section
