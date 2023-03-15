import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ item }) => {
    let navigate = useNavigate();

    return (
        <>
            <div className="card" onClick={() => navigate(`/${item.id}`)} >
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                <div className="title">
                    <h3>{item.name}</h3>
                </div>
            </div>
        </>
    );
}