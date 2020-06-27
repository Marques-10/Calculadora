import React, { Component, useState } from 'react'
import './index.css'
import '../Display/index.js'
import '../Display/index.css'

export default function numbers() {    
    return (
        <div>
            <div className="numbers">
                
                <div>
                    <button onClick={() => this.operator('CE')}>CE</button>
                    <button onClick={() => this.operator('C')}>C</button>
                    <button onClick={() => this.operator('X')}>X</button>
                    <button onClick={() => this.operator('/')}>/</button>
                </div>
                <div>
                    <button onClick={() => this.number('7')}>7</button>
                    <button onClick={() => this.number('8')}>8</button>
                    <button onClick={() => this.number('9')}>9</button>
                    <button onClick={() => this.operator('*')}>*</button>
                </div>
                <div>
                    <button onClick={() => this.number('4')}>4</button>
                    <button onClick={() => this.number('5')}>5</button>
                    <button onClick={() => this.number('6')}>6</button>
                    <button onClick={() => this.operator('-')}>-</button>
                </div>
                <div>
                    <button onClick={() => this.number('0')}>0</button>
                    <button onClick={() => this.number('.')}>.</button>
                    <button onClick={() => this.operator('=')} className="equal">=</button>
                </div>
            </div>
        </div>
    )
}