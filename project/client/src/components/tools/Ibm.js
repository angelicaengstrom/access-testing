import React from 'react'
import Error from '../Error';

function Ibm(props) {
    const {result, time} = props

    let total = 0;
    let error = 0;
    let warning = 0;

    const resultList = result.map((r) => (
        <div class={(r.level === "violation") ? "result-error" : "result-warning"}>
            <Error id={r.ruleId} type={(r.level === "violation") ? "Fel" : "Varning"} engine="ibm"/>
            {/*<p>{r.message}</p>*/}
            <div class="error-found">
                <h4>Hittades vid</h4>
                <p>{r.snippet}</p>
                <h5>Element Hierarki</h5>
                <p>{r.path.dom}</p>
            </div>

            <p hidden>{total++} {(r.level === "violation") ? error++ : warning++}</p>
        </div>
    ))
    return (
        <div>
            <h3>Totalt: {total} (Fel: {error}, Varningar: {warning})</h3>
            <h4 class="time">Testet tog {time} ms</h4>
            <div class="results-content">{resultList}</div>
        </div>
    )
}

export default Ibm