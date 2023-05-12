import styles from '../styles/Main.module.css'
import Section from './Section'
import TaskDescription from './TaskDescription'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function Main({ descriptionChange, ...props }) {
  const sections = [
    { title: 'backlog', type: 'start', children: 'Backlog' },
    { title: 'ready', type: 'backlog', children: 'Ready' },
    { title: 'inProgress', type: 'ready', children: 'In Progress' },
    { title: 'finished', type: 'inProgress', children: 'Finished' },
  ]

  return (
    <BrowserRouter>
      <main className={styles.main}>
        <Routes>
          <Route
            path="/"
            element={sections.map((el, i) => (
              <Section key={i + 1} title={el.title} type={el.type} {...props}>
                {el.children}
              </Section>
            ))}
          />

          <Route
            path="/:id"
            element={
              <TaskDescription
                tasks={props.tasks}
                descriptionChange={descriptionChange}
              />
            }
          />
          <Route
            path="*"
            element={
              <Link className={styles.notFound} to=".." relative="path">
                Page Not Found. Click to back
              </Link>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default Main
