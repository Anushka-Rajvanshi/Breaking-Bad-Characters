import React from "react";
import ResultImg from "../images/ResultImg.png";

function NoResultPage() {
    return (
        <div className="page">
            <img src={ResultImg} alt="No Result Found" className='noResultImg'></img>
        </div>
    )
}

export default NoResultPage
