import React from 'react'
import Error from '../Error';

function Pa11y(props) {
    const {result, time} = props

    let total = 0;
    let error = 0;
    let warning = 0;

    const resultList = result.map((r) => r.issues.map((issues) => 
      (<div class={(issues.type === "error") ? "result-error" : "result-warning"}>
        
        <Error id={issues.code} type={(issues.type === "error") ? "Fel" : "Varning"} engine={(issues.runner === "axe") ? "axe" : "HTMLCS"} />

        {/*<p>{(issues.runner === "axe") ? issues.runnerExtras.help : issues.message}</p>*/}

        <div class="error-found">
          <h4>Hittades vid</h4>
          <p>{issues.context}</p>
          <h5>Element Hierarki</h5>
          <p>{issues.selector}</p>
        </div>
        {/*<p>{issues.runnerExtras.helpUrl}</p>
        <p>{issues.runnerExtras.description}</p>*/}

        <p hidden>{total++} {(issues.type === "error") ? error++ : warning++}</p>
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

export default Pa11y