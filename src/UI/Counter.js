import styles from '../styles/Counter.module.css'

function Counter({ children, counter, title }) {
  return (
    <p className={styles.counter}>
      {children}: {counter(title)}
    </p>
  )
}

export default Counter
