import React, {Component} from 'react'
import Tool from './Tool'
import Result from './Result'

class ToolList extends Component{

    constructor(props){
        super(props)
        this.state = {
            tool : '',
            result : '',
            time : '',
        }
    }
    
    clickHandler = (tool, result, time) => {
        this.setState({tool, result, time})
    }

    render(){
        const {tools} = this.props
        const toolList = tools.map((tool) => <Tool key={tool.index} tool={tool.name} clickHandler={this.clickHandler} result={tool.result} time={tool.time} />)
        return (
            <div>
                <div class="tools-content">{toolList}</div>
                {(this.state.tool != '') ? (<Result tool={this.state.tool} result={this.state.result} time={this.state.time}/>) : (<div>Välj ett av ovanstående verktyg</div>)}
            </div>
        )
    }
}

export default ToolList