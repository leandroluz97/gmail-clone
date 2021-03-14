import React from "react"
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton, Avatar } from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import SettingsIcon from "@material-ui/icons/Settings"
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"

function Header() {
  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png'
          alt=''
        />
      </div>
      <div className='header__middle'>
        <SearchIcon />
        <input type='text' placeholder='Search email' />
        <ArrowDropDownIcon className='header__inputCaret' />
      </div>
      <div className='header__right'>
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar />
      </div>
    </div>
  )
}

export default Header
