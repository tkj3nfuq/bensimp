"use client"
import Link from 'next/link'
import React from 'react'
import styles from "./menuLink.module.css"
import { usePathname } from 'next/navigation'

function MenuLink({item}) {

  const pathName = usePathname()

  return (
    <Link href={item.path} className={`${styles.container} ${pathName === item.path && styles.active}`}>
      <div className={styles.spacing}>{item.icon}</div>
      {item.title}
    </Link>
  )
}

export default MenuLink