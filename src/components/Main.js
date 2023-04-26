import styles from '../styles/Main.module.css'
import Section from './Section'

function Main(props) {
  return (
    <main className={styles.main}>
      <Section title="backlog" type="start" {...props}>
        Backlog
      </Section>
      <Section title="ready" type="backlog" {...props}>
        Ready
      </Section>
      <Section title="inProgress" type="ready" {...props}>
        In Progress
      </Section>
      <Section title="finished" type="inProgress" {...props}>
        Finished
      </Section>
    </main>
  )
}

export default Main
