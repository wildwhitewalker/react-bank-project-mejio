import React from "react";
import * as BsIcons from "react-icons/bs";


export const SidebarData = [
    {
        title: 'Home',
        path: '*',
        icon: <BsIcons.BsHouse />,
        cName: 'nav-text',
    },
    {
        title: 'Account',
        path: '/account',
        icon: <BsIcons.BsPersonCircle />,
        cName: 'nav-text',
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <BsIcons.BsPersonFillGear />,
        cName: 'nav-text',
    },
    {
        title: 'Deposit',
        path: '/deposit',
        icon: <BsIcons.BsBoxArrowInDown />,
        cName: 'nav-text',
    },
    {
        title: 'Withdraw',
        path: '/withdraw',
        icon: <BsIcons.BsBoxArrowUp />,
        cName: 'nav-text',
    },
    {
        title: 'Transfer',
        path: '/transfer',
        icon: <BsIcons.BsArrowLeftRight />,
        cName: 'nav-text',
    },
]

