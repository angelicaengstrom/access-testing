import React from 'react'

function Tool(props) {
    const {tool, clickHandler, result, time} = props;

    return (
        <div class="tool-content"><button onClick={() => clickHandler(tool, result, time)}>{tool}</button></div>
    )
}

export default Tool