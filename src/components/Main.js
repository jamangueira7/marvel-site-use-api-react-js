import React from "react";

export const Main = () => {
    return (
        <header>
            <div className="bg">
                <img src="./img/bg.png" alt=""/>
            </div>
            <div className="search-bar">
                <img src="./img/logo.png" alt="logo Marvel"/>
                <input type="search" placeholder="Procurar Herói" className="search"/>
            </div>
        </header>
    );
}