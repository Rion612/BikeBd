import React from 'react';

const ScoreBar = (props) => {
    return (
        <div>
            <label style={{ margin: '0' }}>{props.label}</label>
            <div className='score_div'>
                <div className='performance_div_div' style={{ width: props.width, backgroundColor: props.color}}>{props.score}</div>
            </div>
        </div>
    );
};

export default ScoreBar;