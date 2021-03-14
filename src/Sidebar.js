import { Button } from "@material-ui/core"
import React from "react"
import "./Sidebar.css"
import AddIcon from "@material-ui/icons/Add"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
      >
        COMPOSE
      </Button>
    </div>
  )
}

export default Sidebar
