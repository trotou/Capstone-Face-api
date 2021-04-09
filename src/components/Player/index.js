import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Player = ({ onplay, videoRef }) => {
    const [inputValue, setInputValue] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setUrl(inputValue);
    };
    return (
        <div>
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        onChange={(e) => setInputValue(e.target.value)}
                        style={{ margin: '20px' }}
                        className="form-control"
                        type="text"
                        placeholder="Input the video url"
                    />
                    <button style={{ margin: '20px' }} className="btn btn-primary">
                        PLAY VIDEO
                    </button>
                </form>
            </div>
            <ReactPlayer url={url}/>
        </div>
    );
};

export default Player;
