import UserMenu from '../UI/UserMenu'
import styles from '../styles/Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1>Awesome Kanban Board</h1>
      <UserMenu />
    </header>
  )
}

export default Header
