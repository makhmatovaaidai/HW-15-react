import React from 'react'

const Demo = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>Demo Click</button>
      <div>{props.user.name}</div>
      <div>{props.user.age}</div>
    </div>
  );
}

export default React.memo(Demo)
