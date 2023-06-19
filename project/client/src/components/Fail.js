import React from 'react'

function Fail(props) {
    const {error} = props
    return (
        <div class="test-error">
            <h3>Testet kunde inte utföras</h3>
            <p><b>Pågrund av:</b> {error}</p></div>
    )
}

export default Fail