import React from 'react'
import Element from './element/page'
import styles from './elements.module.css'

const elementItems = {
    title: 'Elements',
    list: [
        {
            title: 'Pyro',
            image: 'https://paimon.moe/images/elements/pyro.png'
        },
        {
            title: 'Hydro',
            image: 'https://paimon.moe/images/elements/hydro.png'
        },
        {
            title: 'Anemo',
            image: 'https://paimon.moe/images/elements/anemo.png'
        },
        {
            title: 'Electro',
            image: 'https://paimon.moe/images/elements/electro.png'
        },
        {
            title: 'Dendro',
            image: 'https://paimon.moe/images/elements/dendro.png'
        },
        {
            title: 'Cryo',
            image: 'https://paimon.moe/images/elements/cryo.png'
        },
        {
            title: 'Geo',
            image: 'https://paimon.moe/images/elements/geo.png'
        }
    ]
}
function Elements() {
  return (
    <div className={styles.container}>
        <ul className={styles.elements_container}>
            {elementItems.list.map(item =>
                <li key={item.title} className={styles.element_container}>
                    <Element item={item} key={item.title}/>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Elements