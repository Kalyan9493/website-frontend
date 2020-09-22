import React, {Component} from 'react'
import {MenuItems} from './MenuItems'
import './Navbar.css'
import { Button } from '../Button'
import Registration from '../auth/Registration'
import Login from '../auth/Login'

class Navbar extends Component{
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})

    }

    render(){
        return (
            <React.Fragment>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>KeyanshTech</h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item,index) => {
                        return <li key={index}><a className={item.cName} href= {item.url} >{item.title}</a></li>
                    })}
                </ul>
                <Button onClick = {this.handleClick}>Login/SignUp</Button>
            </nav>
            <div>
                {this.state.clicked ? <Registration/> : <Login/> }
            </div>
            </React.Fragment>
        )
    }
}

export default Navbar