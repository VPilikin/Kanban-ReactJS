import Select from 'react-select'
import styles from '../styles/SelectTask.module.css'

function SelectTask(props) {
  return (
    <Select
      placeholder="Select your Task"
      className={styles.select}
      {...props}
    />
  )
}

export default SelectTask
