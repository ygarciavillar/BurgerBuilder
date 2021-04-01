import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import HamburgerToogle from '../SideNav/HamburgerToogle/HamburgerToogle'
import LogBtn from '../LogBtn/LogBtn'
import classes from './Toolbar.module.css'


const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <Logo />
            <nav className={classes.NavDesktopOnly}>
                <NavigationItems />
            </nav>
            <div className={classes.BtnDesktopOnly}>
                <LogBtn>Register</LogBtn>
            </div>
            <HamburgerToogle />
        </header>
    )
}

export default toolbar
