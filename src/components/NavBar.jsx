import React from 'react'
import Link from './Link'
import links from '../assets/links.js'

const NavBar = () => {
    const icon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
    return (
        <header>
            <nav>
                <div id="up-nav">
                    <div className="container">
                        <div id='logo' className="d-flex j-center align-items-center">
                            <img src={`${icon}`} alt="Pokéball" class="pokeball-icon" />
                            <h1>Pokédex</h1>
                        </div>
                        <p className='text-center'>Il database dei Pokémon</p>
                    </div>
                </div>
                <div id="bottom-nav">
                    <div className="container">
                        <ul className='d-flex j-between'>
                            {links.map((link) => (
                                <Link key={link.id} link={link} />
                            ))}
                        </ul>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default NavBar
