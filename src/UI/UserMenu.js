import { useState } from 'react'
import styles from '../styles/UserMenu.module.css'

const UserMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <>
      <nav
        onClick={() => setActiveMenu(!activeMenu)}
        className={styles.logoMenu}
      ></nav>
      {activeMenu && (
        <div className={styles.menu}>
          <div className={styles.menuContent}>
            <ul>
              <li>Profile</li>
              <li>Log Out</li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default UserMenu
