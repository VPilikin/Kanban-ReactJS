import styles from '../styles/Input.module.css'

function Input(props) {
  return <input {...props} className={styles.input}></input>
}

export default Input
