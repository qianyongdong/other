import React,{ Component } from 'react';
import './Nav.css'

class Nav extends Component{
    render() {
        return (
                <header className='main-header'>
                    <nav className='container'>
                        <ul>
                            <li><a>基础版</a></li>
                            <li><a>进阶版</a></li>
                            <li><a>进阶后台</a></li>
                        </ul>
                    </nav>
                </header>
          )
    }
}
export default Nav