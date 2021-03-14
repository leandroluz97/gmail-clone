import { Button, IconButton } from "@material-ui/core"
import React from "react"
import "./Sidebar.css"
import AddIcon from "@material-ui/icons/Add"
import InboxIcon from "@material-ui/icons/Inbox"
import SidebarOptions from "./SidebarOptions"
import StarIcon from "@material-ui/icons/Star"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import SendIcon from "@material-ui/icons/Send"
import DraftsIcon from "@material-ui/icons/Drafts"
import MoreIcon from "@material-ui/icons/More"
import PersonIcon from "@material-ui/icons/Person"
import DuoIcon from "@material-ui/icons/Duo"
import CallIcon from "@material-ui/icons/Call"
import LabelIcon from "@material-ui/icons/Label"

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Button
        startIcon={<AddIcon fontSize='large' />}
        className='sidebar__compose'
      >
        Compose
      </Button>

      <SidebarOptions
        Icon={InboxIcon}
        title='Inbox'
        number={54}
        selected={true}
      />
      <SidebarOptions Icon={StarIcon} title='Starred' number={4301} />
      <SidebarOptions Icon={WatchLaterIcon} title='Snoozed' number={1948} />
      <SidebarOptions Icon={SendIcon} title='Sent' number={310} />

      <SidebarOptions Icon={DraftsIcon} title='Drafts' number={10} />
      <SidebarOptions Icon={LabelIcon} title='More' number={17} />

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <CallIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
