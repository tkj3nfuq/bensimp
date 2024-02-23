import React from 'react'
import styles from './characters.module.css'
import Character from './character/page'

function Characters() {

    const characterItems = {
        title: 'Characters',
        list: [
            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },
            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },            {
                title: 'Nahida',
                image: 'https://paimon.moe/images/characters/nahida.png'
            },
        ]
    }

  return (
    <div className={styles.container}>
        <ul className={styles.characters_container}>
            {
                characterItems.list.map(item =>
                    <li key={item.title} className={styles.character_container}>
                        <Character item={item} key={item.title} />
                    </li>
                )
            }
        </ul>
    </div>
  )
}

export default Characters