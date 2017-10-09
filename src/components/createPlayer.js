import React, { Component } from 'react';
import './createPlayer.css';

class CreatePlayer extends Component {
    render() {
        return (
            <div className='main_container_create'>
                <form>
                    Player Name:<input type="text" />
                    Nick Name:<input type="text" />
                    Favorite Game:<input type="text" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default CreatePlayer;