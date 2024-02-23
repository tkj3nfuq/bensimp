import React from 'react'
import styles from './weapons.module.css'
import Weapon from './weapon/page'

function Weapons() {

    const weaponItems = {
        title: 'Weapons',
        list: [
            {
                title: 'Sword',
                image: 'https://paimon.moe/images/weapons/sword.png',
            },
            {
                title: 'Claymore',
                image: 'https://paimon.moe/images/weapons/claymore.png',
            },
            {
                title: 'Polearm',
                image: 'https://paimon.moe/images/weapons/polearm.png',
            },
            {
                title: 'Catalyst',
                image: 'https://paimon.moe/images/weapons/catalyst.png',
            },
            {
                title: 'Bow',
                image: 'https://paimon.moe/images/weapons/bow.png',
            },
        ]
    }

  return (
    <div className={styles.container}>
        <ul className={styles.weapons_container}>
            {
                weaponItems.list.map(item =>
                    <li key={item.title} className={styles.weapon_container}>
                        <Weapon item={item} key={item.title}/>
                    </li>
            )}
        </ul>
    </div>
  )
}

export default Weapons