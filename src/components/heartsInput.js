import React, { Component } from 'react';
import './heartsInput.css';

class HeartsInput extends Component {
    render() {
        console.log(this.props);
        var input = this.props.scores.map((e, i)=> {
            return (
            <input className="input_hearts" type="number" value={e} onChange={(event)=> this.props.handleChange((this.props.round-1), i, event.target.value)} />
        )
        });
        return (
            <form className="round_hearts">
                {(this.props.round)}{input}
            </form>
        )
    }
}

export default HeartsInput;