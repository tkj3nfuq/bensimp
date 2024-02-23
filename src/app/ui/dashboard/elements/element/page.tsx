import React from 'react'
import styles from './element.module.css'

function Element({item}) {
  return (
    <div className={styles.container}>
      <img src={item.image} alt={item.title} className={styles.img} width="30" height="30"></img>
    </div>

  )
}

export default Element