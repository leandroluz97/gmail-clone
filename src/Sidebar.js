import { Button } from "@material-ui/core"
import React from "react"
import "./Sidebar.css"
import AddIcon from "@material-ui/icons/Add"
import InboxIcon from "@material-ui/icons/Inbox"
import SidebarOptions from "./SidebarOptions"
import StarIcon from "@material-ui/icons/Star"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
      >
        COMPOSE
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title='Starred' number={17} />
    </div>
  )
}

export default Sidebar
