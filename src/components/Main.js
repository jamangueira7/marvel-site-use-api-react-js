import React, {useEffect, useState} from "react";
import { Card } from "./Card";
import axios from "axios";

export const Main = () => {
    const md5hash = `c47295561127eec2e6efc378a64f0d4a`;
    const publicKey = `87972729642c1e41dcba909747394e95`;
    const baseURL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${md5hash}`;

    const [url, setUrl] = useState(baseURL);
    const [item, setItem] = useState();

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results)
        }

        fetch();
    }, [url]);
    return (
        <>
            <header>
                <div className="bg">
                    <img src="./img/bg.png" alt=""/>
                </div>
                <div className="search-bar">
                    <img src="./img/logo.png" alt="logo Marvel"/>
                    <input type="search" placeholder="Procurar Herói" className="search"/>
                </div>
            </header>
            <main>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </main>
        </>
    );
}