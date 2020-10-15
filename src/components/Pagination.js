import React from "react";

export default function Pagination({onPrev, onNext}){
    return(
        <div>
            <button onClick={onPrev}>Previous</button>
            <button onClick={onNext}>Next</button>
        </div>
    );

}

