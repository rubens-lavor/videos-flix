import React from 'react'
import logo from '../../assets/img/logo.png'
import "./Menu.css"
//import ButtonLink from './components/ButtonLink/ButtonLink'
import Button from '../Button/Button'

function Menu() {

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={logo} alt="video flix logo" />
            </a>

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;