import React from 'react'
import NavigationItems from '../NavigationItems/NavigationItems'
import LogBtn from '../LogBtn/LogBtn'
import classes from './SideNav.module.css'


const sideNav = ({ open }) => {
    let attachedClasses = [classes.SideDrawer, classes.Close]
    if (open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <div className={attachedClasses.join(' ')}>
            <nav className={classes.OtherDevices}>
                <NavigationItems />
            </nav>
            <LogBtn>Register</LogBtn>
        </div>
    )
}

export default sideNav
