import React, {useEffect, useState } from "react";
import axios from 'axios';

function CharacterPage({data, back}) {
    const [quotes, setQuotes] = useState([]);
    const info = data[0];
    const id = info.char_id;
    const textStyle = {
        color:"",
    }

    useEffect(() => {
        const getQuotes = async () => {
            const quotesArray = [];
            const result = await axios(`https://www.breakingbadapi.com/api/quotes/${id}`);
            result.data.map((item) => quotesArray.push(item.quote) );
            setQuotes(quotesArray);
        }
        getQuotes();
    },)

    if(info.status==="Alive"){
        textStyle.color="#00ff00";
    }else if(info.status === "Deceased"){
        textStyle.color = "red";
    }else{
        textStyle.color= "yellow";
    }
    
    return (
        <div className="page">
            <div className="backDiv">
            <button onClick={back} className="backBtn btn">Back</button>
            </div>
            <div>
            <img src={info.img} alt="character" className="singleCharacterImg"/>
            <h1>{info.name}</h1>
            <div className="row">
            <div className="col-lg-6 col-md-6"><h4>Status: </h4> <span style={textStyle}>{info.status}</span></div>
            <div  className="col-lg-6 col-md-6"><h4>Portrayed by: </h4> {info.portrayed}</div>
            </div>
            <div className="row">
            <div  className="col-lg-6 col-md-6"><h4>DOB: </h4> {info.birthday}</div>
            <div  className="col-lg-6 col-md-6"><h4>Nickname: </h4> {info.nickname}</div>
            </div>
            <div className="row">
            <div  className="col-lg-6 col-md-6"><h4>Occupation: </h4> {info.occupation.map((o) => o+", ")}</div>
            <div  className="col-lg-6 col-md-6"><h4>Season: </h4> {info.appearance.map((item) => String(item)+", ")}</div>
            </div>
            <div  className="col-lg-6 col-md-6" style={{marginBottom:"85px"}}><h4>Quotes: </h4> {quotes.map((quote) => quote+"   ")}</div>
            </div>
        </div>
    )
}

export default CharacterPage
