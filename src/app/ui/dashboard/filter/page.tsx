import React from 'react'
import styles from './filter.module.css'
import Elements from '../elements/page'
import Weapons from '../weapons/page'

function Filter() {
  return (
    <div className={styles.container}>
      <Elements/>
      <Weapons />
    </div>
  )
}

export default Filter