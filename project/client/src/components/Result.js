import React from 'react'
import Ibm from './tools/Ibm'
import Lighthouse from './tools/Lighthouse'
import Pa11y from './tools/Pa11y'
import Qualweb from './tools/Qualweb'

function Result(props) {
    const {tool, result, time} = props
    let component

    if(tool === "pa11y"){
        component = <Pa11y result={result} time={time}/>
    }else if(tool === "ibm"){
        component = <Ibm result={result} time={time}/>
    }else if(tool === "qualweb"){
        component = <Qualweb result={result} time={time}/>
    }else if(tool === "lighthouse"){
        component = <Lighthouse result={result} time={time}/>
    }

    return (
        <div>
            <h3 class="tool-title">Resultat av {tool}</h3>
            {component}
        </div>
    )
}

export default Result