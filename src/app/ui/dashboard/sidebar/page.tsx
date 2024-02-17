import React from 'react'
import styles from './sidebar.module.css'
import {
  MdAccountCircle,
  MdDashboard,
  MdCategory,
} from "react-icons/md"
import MenuLink from './menuLink/menuLink'

const menuItems = {
  title: "Pages",
  list: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <MdDashboard/>,
    },
    {
      title: "Characters",
      path: "/dashboard/characters/",
      icon: <MdAccountCircle/>,
    },
    {
      title: "Artifacts",
      path: "/dashboard/artifacts/",
      icon: <MdCategory/>
    }
  ]
}

function SideBar() {
  return (
    <div className={styles.container}>
      <ul>
        {menuItems.list.map((item)=> 
          <li key={item.title}>
            <MenuLink item={item} key={item.title} />
          </li>
        )}
      </ul>
    </div>
  )
}

export default SideBar