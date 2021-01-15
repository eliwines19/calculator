import React from 'react';
import { calculate } from './functions/CalculatorFunctions';

class Calculator extends React.Component {

    state = {
        textbox: "",
        numbers: [],
        operation: []
    }

    onClickNumber = (e) => {
        this.setState({
            textbox: this.state.textbox.concat(e.target.value),
            numbers: [...this.state.numbers, e.target.value]
        })
    }

    onClickClear = (e) => {
        this.setState({
            textbox: "",
            operation: [],
            numbers: []
        })
    }

    onClickOpposite = (e) => {
        if (this.state.textbox[0] !== "-"){
            this.setState({
                textbox: this.state.textbox.replace(/^/, "-")
            })
        }
        if (this.state.textbox[0] === "-"){
            this.setState({
                textbox: this.state.textbox.slice(1)
            })
        }
    }

    // onClickBackspace = (e) => {
    //     const lastChar = this.state.textbox[this.state.textbox.length-1]
    //     console.log(lastChar)
    //     if(typeof parseInt(lastChar, 10) === "number"){
    //         this.setState({
    //             textbox: this.state.textbox.slice(0, -1)
    //         })
    //     } else {
    //         this.setState({
    //             textbox: this.state.textbox.slice(0, -1),
    //             operation: []
    //         })
    //     }
    // }

    onClickOperation = (e) => {
        this.setState({
            textbox: this.state.textbox.concat(e.target.value),
            operation: [...this.state.operation, e.target.value]
        })
    }

    onClickEquals = (e) => {
        this.setState({
            textbox: calculate(this.state),
            numbers: [],
            operation: []
        })
    }

    render(){
        console.log(this.state.textbox)
        return(
            <div id="calculator">
                <div id="textbox">
                    <span>{this.state.textbox}</span>
                </div>
                <div id="buttons">
                    <button id="clear" className="other" onClick={(e) => this.onClickClear(e)}>C</button>
                    <button id="opposite" className="other" onClick={(e) => this.onClickOpposite(e)}>(-)</button>
                    <button id="point" className="other" value="." onClick={(e) => this.onClickNumber(e)}>.</button>
                    <button id="equals" className="other" onClick={(e) => this.onClickEquals(e)}>=</button>
                    <button id="seven" className="number" value={7} onClick={(e) => this.onClickNumber(e)}>7</button>
                    <button id="eight" className="number" value={8} onClick={(e) => this.onClickNumber(e)}>8</button>
                    <button id="nine" className="number" value={9} onClick={(e) => this.onClickNumber(e)}>9</button>
                    <button id="divide" className="operation" value="/" onClick={(e) => this.onClickOperation(e)} >&divide;</button>
                    <button id="four" className="number" value={4} onClick={(e) => this.onClickNumber(e)}>4</button>
                    <button id="five" className="number" value={5} onClick={(e) => this.onClickNumber(e)}>5</button>
                    <button id="six" className="number" value={6} onClick={(e) => this.onClickNumber(e)}>6</button>
                    <button id="times" className="operation" value="*" onClick={(e) => this.onClickOperation(e)} >&times;</button>
                    <button id="one" className="number" value={1} onClick={(e) => this.onClickNumber(e)}>1</button>
                    <button id="two" className="number" value={2} onClick={(e) => this.onClickNumber(e)}>2</button>
                    <button id="three" className="number" value={3} onClick={(e) => this.onClickNumber(e)}>3</button>
                    <button id="minus" className="operation" value="-" onClick={(e) => this.onClickOperation(e)} >&minus;</button>
                    <button id="backspace" className="other" onClick={(e) => this.onClickBackspace(e)}>&#8592;</button>
                    <button id="zero" className="number" value={0} onClick={(e) => this.onClickNumber(e)}>0</button>
                    <button id="plus" className="operation" value="+" onClick={(e) => this.onClickOperation(e)} >&#43;</button>
                </div>
            </div>
        )
    }
}

export default Calculator