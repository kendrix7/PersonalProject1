import React, { Component } from 'react';
import HeartsInput from './heartsInput.js';
import './hearts.css';

class Hearts extends Component {
    constructor() {
        super();

        this.state = {
            game_over: "no",
            scores_array: [ [0, 0, 0, 0] ]
        }

        this.handleChange = this.handleChange.bind(this);
    }
    newRound() {
        return <HeartsInput />;
    }

    handleSubmit() {
        var newScores = this.state.scores_array.slice();
        newScores.push([0, 0, 0, 0]);
        this.setState({
            scores_array: newScores
        })
    }

    handleChange( round, player, value ) {
        var newScores = this.state.scores_array.slice();
        console.log(round, player);
        newScores[round][player] = value;
        this.setState({
            scores_array: newScores
        })
    }

    render() {
        var rounds = this.state.scores_array.map((e,i) => {
            return (<HeartsInput
                key = {i}
                round = {i + 1}
                scores = {e}
                handleChange = {this.handleChange}
                />)
        });
        return (

            <div className="main_container_hearts">
                <div className="title_hearts">Hearts</div>
                <div className="names_hearts">
                    <div>Round</div>
                    <div>Mark</div>
                    <div>John</div>
                    <div>Katy</div>
                    <div>Sam</div>
                </div>
                <div className="scores_container">
                    {rounds}
                </div>
                <div className="total_bar">
                    <div>Total</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="submit_btn_hearts">
                    <button onClick={(event)=> this.handleSubmit()} id="hearts_btn">SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default Hearts;