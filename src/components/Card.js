import React from "react";

export const Card = ({item}) => {
    return (
        <>
            <div className="card">
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                <div className="title">
                    <h3>{item.name}</h3>
                </div>
            </div>
        </>
    );
}