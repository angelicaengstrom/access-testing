import React from 'react'
import Error from '../Error';

function Lighthouse(props) {
    const {result, time} = props

    let total = 0;
    let error = 0;
    let warning = 0;

    const resultList = Object.entries(result).map((r) => (
        <div>
            {r[1].score == 0 ? Object.entries(r[1].details.items).map((item) =>
                (<div>
                    <div class={(r[1].score == 0) ? "result-error" : "result-warning"}>
                        <Error id={r[1].id} type={(r[1].score == 0) ? "Fel" : "Varning"} engine="axe"/>
                        {/*<p>{r[1].title} {r[1].description}</p>*/}
                        <div class="error-found">
                            <h4>Hittades vid</h4>
                            <p>{item[1].node.snippet}</p>
                            <h5>Element Hierarki</h5>
                            <p>{item[1].node.selector}</p>
                        </div>

                        <p hidden>{total++} {(r[1].score == 0) ? error++ : warning++}</p>
                    </div>
                    {item[1].subItems ? (
                        <div>
                            {item[1].subItems.items.map((subItem) => 
                            (<div class={(r[1].score == 0) ? "result-error" : "result-warning"}>
                                <Error id={r[1].id} type={(r[1].score == 0) ? "Fel" : "Varning"} engine="axe"/>
                                {/*<p>{r[1].title} {[1].description</p>*/}
                                <div class="error-found">
                                    <h4>Hittades vid</h4>
                                    <p>{subItem.relatedNode.snippet}</p>
                                    <h5>Element Hierarki</h5>
                                    <p>{subItem.relatedNode.selector}</p>
                                </div>

                                <p hidden>{total++} {(r[1].score == 0) ? error++ : warning++}</p>
                            </div>))}
                        </div>
                    ) : (<div></div>)}
                    
                </div>) )
            
            : (<div></div>)}
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

export default Lighthouse