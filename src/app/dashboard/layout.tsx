import React from 'react'
import SideBar from '../ui/dashboard/sidebar/page'
import NavBar from '../ui/dashboard/navbar/page'
import styles from '../ui/dashboard/dashboard.module.css'

function Layout({children}) {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <SideBar/>
        </div>
        <div className={styles.content}>
            <NavBar/>
            {children}
        </div>
    </div>
  )
}

export default Layout