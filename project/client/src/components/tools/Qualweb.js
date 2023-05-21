import React from 'react'
import Error from '../Error';

function Qualweb(props) {
    const {result, time} = props

    let total = 0;
    let error = 0;
    let warning = 0;

    const resultList = result.map((r) => Object.entries(r.results).map((e) =>
        (
        <div>
            {e[1].verdict === "passed" ? (<div></div>) : (
                <div class={e[1].verdict === "failed" ? "result-error" : "result-warning"}>
                    <Error id={r.code} type={e[1].verdict === "failed" ? "Fel" : "Varning"} engine="qualweb"/>
                    <p>{r.description}</p>
                    <div class="error-found">
                    <h4>Hittades vid</h4>
                        <p>{e[1].elements[0].htmlCode}</p>
                        <h5>Element Hierarki</h5>
                        <p>{e[1].elements[0].pointer}</p>
                    </div>
                    <p hidden>{total++} {e[1].verdict === "failed" ? error++ : warning++}</p>
                </div>
            ) }

        </div>)
    ))

    return (
        <div>
            <h3>Totalt: {total} (Fel: {error}, Varningar: {warning})</h3>
            <h4 class="time">Testet tog {time} ms</h4>
            <div class="results-content">{resultList}</div>
        </div>
    )
}

export default Qualweb