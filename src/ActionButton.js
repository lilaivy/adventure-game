import React from 'react';

export default function ActionButton(props) {
  const callback = props.callback || props.goToScene;
  return (
    <div>
      <button onClick={() => {
        callback(props.currentScene.nextScene);
      }}>
        {props.buttonText}
      </button>

      <button onClick={() => {
        props.goToScene(props.currentScene.prevScene);
      }}>
        Go back
      </button>
    </div>
  );
}