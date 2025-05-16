import React from 'react'
import { NavLink } from 'react-router-dom'

const Link = ({ link }) => {

    const { name, path } = link

    return (
        <li>
            <NavLink to={path}>{name}</NavLink>
        </li>
    )
}

export default Link
