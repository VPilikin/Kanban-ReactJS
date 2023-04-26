import styles from '../styles/Button.module.css'

function Button({ children, ...props }) {
  console.log(children)
  return (
    <button
      className={`${styles.button} ${
        children == 'Submit' ? styles.submit : ''
      }`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
