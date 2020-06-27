import React from 'react'
import './index.css'

export default function menu() {
    return (
        <div className="menu">
            <div className="menu-left">
                <div><button>CK</button></div>
                <div className="text-default">Padrão</div>
            </div>
            <div className="menu-right">@</div>
        </div>
    )
}