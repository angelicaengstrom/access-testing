import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import ToolList from './ToolList';
import isUrl from 'is-url';


function Test() {
    const url = isUrl(localStorage.getItem('url')) ? localStorage.getItem('url') : "https://" + localStorage.getItem('url');
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        if(isUrl(url)){
            fetch("/api/" + encodeURIComponent(url), {method: "GET"}).then(
            response => response.json()
            ).then(
            data => {
                setBackendData(data)
            }
            )
        }
    }, [])

    if(typeof backendData.url === 'undefined'){
        if(isUrl(url)){
            return (<div class="loader"><ClipLoader /></div>)
        }else{
            return(<div></div>)
        }
    }else if(typeof backendData.username === 'undefined'){
        return(         
        <div class="test-content">
            <div class="inner-test-content">
            <h2>{backendData.url}</h2>
            <ToolList tools={backendData.accesstools}/>
            </div>
        </div>
        )
    }else{
        return(         
            <div class="test-content">
                <div class="inner-test-content">
                <h2>{backendData.url}</h2>
                <h3>{backendData.username}</h3>
                </div>
            </div>
        ) 
    }
}

export default Test