import React from 'react'
import Navbar from './navbar'
import '../styles/global.css'
export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <footer>
                <p align="center">Copyright : 2021</p>
            </footer>
        </div>
    )
}
