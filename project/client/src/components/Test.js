import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import ToolList from './ToolList';
import isUrl from 'is-url';
import Fail from './Fail';


function Test() {
    const url = isUrl(localStorage.getItem('url')) ? localStorage.getItem('url') : "https://" + localStorage.getItem('url');
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    const [backendData, setBackendData] = useState([{}])
    useEffect(() => {
        if(isUrl(url)){
            if(username !== "" && password !== ""){
                fetch("/api", {
                    method: "POST", 
                    headers: {
                    'Content-Type': 'application/json',
                    }, 
                    body: JSON.stringify({url: url, username: username, password: password})})
                    .then(
                        response => response.json()
                    ).then(
                    data => {
                        setBackendData(data)
                    }
                )
            }else{
                fetch("/api/" + encodeURIComponent(url), {method: "GET"}).then(
                response => response.json()
                ).then(
                data => {
                    setBackendData(data)
                }
                )
            }
        }
    }, [])

    if(typeof backendData.url === 'undefined'){
        if(isUrl(url)){
            return (<div class="loader"><ClipLoader /></div>)
        }else{
            return(<div></div>)
        }
    }else if(typeof backendData.username === 'undefined'){
       /* <div class="test-content">
            <div class="inner-test-content">
            <h2>{backendData.url}</h2>
            </div>
        </div>*/
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
                <h3>Inloggad som: {backendData.username}</h3>
                {typeof backendData.error === 'undefined' ? <ToolList tools={backendData.accesstools} /> : <Fail error={backendData.error}/> }
                </div>
            </div>
        ) 
    }
}

export default Test