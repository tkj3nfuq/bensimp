"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './navbar.module.css'
import { MdAccountCircle  } from "react-icons/md";

function NavBar() {

  const pathName = usePathname();
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {pathName.split('/').pop()}
      </div>
      <div className={styles.user}>
        <div>UserName</div>
        <div className={styles.spacing}>
          <MdAccountCircle size={30}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar