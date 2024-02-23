import React from 'react'
import styles from './character.module.css'

function Character({item}) {
  return (
    <div className={styles.container}>
        <div className='bg-amber-500 rounded-xl border-4 border-slate-100'>
            <img src={item.image} alt={item.title} width='100' height='100'></img>
        </div>
        <div>
          <p className='text-white font-bold text-center mt-1 text-slate-100'>{item.title}</p>
        </div>
    </div>
  )
}

export default Character