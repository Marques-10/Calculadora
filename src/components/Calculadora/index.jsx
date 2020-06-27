import React, { Component } from 'react'
import './index.css'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    indice: 0,
}

export default class Calculadora extends Component {
    
    state = {...initialState}

    constructor(props) {
        super(props)

        this.clearMemory()
    
    }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        
        if (operation == 'X') {
            const indice = this.state.indice
            const values = [ ...this.state.values ]

            let valueDisplay = this.state.displayValue
            valueDisplay = valueDisplay.substring(0,(valueDisplay.length - 1));
            values[indice] = valueDisplay
            
            this.setState({
                displayValue: valueDisplay,
                indice,
                values,
            })

            return
        }

        if (operation == 'CE') {
            const indice = this.state.indice
            const values = [ ...this.state.values ]

            let valueDisplay = 0
            values[indice] = 0

            this.setState({
                displayValue: valueDisplay,
                values,
                indice,
            })

            return
        }

        if (this.state.indice === 0) {
            
            this.setState({
                operation,
                indice: 1,
                clearDisplay: true,
            })
        
        } else {

            const equals = operation == '='
            const stateOperation = this.state.operation
            
            const values = [ ...this.state.values ]
            
            try {
                values[0] = Math.round(eval(`${values[0]} ${stateOperation} ${values[1]}`) * 100) / 100
                values[1] = 0
            } catch(e) {
                values[0] = this.state.values[0]
            }
            
            this.setState({ 
                displayValue: values[0],
                values,
                operation: operation == '=' ? null : operation,
                indice: operation == '=' ? 0 : 1,
                clearDisplay: !equals,
            })
        }

    }

    setNumber(number) {
        const indice = this.state.indice
        console.log(indice)
        
        if (number === '.') {
            
            const indice = this.state.indice
            const values = [ ...this.state.values ]
            const valueDisplay = this.state.values[indice].toString()

            console.log(valueDisplay)

            if(valueDisplay.includes('.')) {
                return
            } else {
                if (valueDisplay == '0') {

                    values[indice] = parseFloat('0') + '.'
                    this.setState({
                        displayValue: values[indice],
                        clearDisplay: false,
                        values,
                    }) 
                } else {
                    values[indice] = valueDisplay + '.'

                    this.setState({
                        displayValue: values[indice],
                        clearDisplay: false,
                        values,
                    })
                }
            }
        }

        const clearDisplay = this.state.displayValue == '0' || this.state.clearDisplay
        const valueTime = clearDisplay ? '' : this.state.displayValue

        const valueDisplay = valueTime + number
        
        if (number !== '.') {
            const indice = this.state.indice
            const values = [ ...this.state.values ]
            
            values[indice] = parseFloat(valueDisplay)

            console.log('Value: ',valueDisplay, "Array: ", values)
            this.setState({
                displayValue: valueDisplay,
                clearDisplay: false,
                values,
            })
        }



    }

    render() {
        return (
            <div className="container">
                <div className="topo">
                    <div>Calculadora</div>
                </div>

                <div className="menu">
                    <div className="menu-left">
                        <div><button><i class="icon-windows"></i></button></div>
                        <div className="text-default">Padrão</div>
                    </div>
                    <div className="menu-right"><i class="icon-time"></i></div>
                </div>

                <div className="display">{this.state.displayValue}</div>

                <div className="numbers">
                    <div>
                        <button onClick={() => this.setOperation('CE')}>CE</button>
                        <button onClick={() => this.clearMemory('C')}>C</button>
                        <button onClick={() => this.setOperation('X')}>X</button>
                        <button onClick={() => this.setOperation('/')}>/</button>
                    </div>
                    <div>
                        <button onClick={() => this.setNumber('7')}>7</button>
                        <button onClick={() => this.setNumber('8')}>8</button>
                        <button onClick={() => this.setNumber('9')}>9</button>
                        <button onClick={() => this.setOperation('*')}>*</button>
                    </div>
                    <div>
                        <button onClick={() => this.setNumber('4')}>4</button>
                        <button onClick={() => this.setNumber('5')}>5</button>
                        <button onClick={() => this.setNumber('6')}>6</button>
                        <button onClick={() => this.setOperation('-')}>-</button>
                    </div>
                    <div>
                        <button onClick={() => this.setNumber('3')}>3</button>
                        <button onClick={() => this.setNumber('2')}>2</button>
                        <button onClick={() => this.setNumber('1')}>1</button>
                        <button onClick={() => this.setOperation('+')}>+</button>
                    </div>
                    <div>
                        <button onClick={() => this.setNumber('0')}>0</button>
                        <button onClick={() => this.setNumber('.')}>.</button>
                        <button onClick={() => this.setOperation('=')} className="equal">=</button>
                    </div>
                </div>
            </div>
        )
    }
}