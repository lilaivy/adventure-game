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

      {props.currentScene.choice3 &&
        <button onClick={() => {
          callback(props.currentScene.nextScene2);
        }
        }>
          {props.buttonText2}
        </button>
      }

      {props.currentScene.items.length > 0 &&
        props.currentScene.items.map(item => {
          return <button key={item.name} onClick={() => props.addItem(item)}>
            Pick Up {item.name}
            </button>;
        })
      }

      <button onClick={() => {
        props.goToScene(props.currentScene.prevScene);
      }}>
        Go back
      </button>
    </div>
  );
}