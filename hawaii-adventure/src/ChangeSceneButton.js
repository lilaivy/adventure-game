import React from 'react';

export default function changeSceneButton(props) {
    return (
        <div>
            <button className="scene-button"
                onClick={() => props.changeScene(props.Scene)}>
                Start Your Adventure</button>
        </div>

    )
}