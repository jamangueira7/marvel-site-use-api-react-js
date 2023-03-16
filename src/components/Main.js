import React, {useEffect, useState} from "react";
import { Card } from "./Card";
import axios from "axios";

export const Main = () => {
    const baseURL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`;

    const [url, setUrl] = useState(baseURL);
    const [items, setItems] = useState();
    const [search,setSearch]=useState("");

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItems(res.data.data.results)
        }

        fetch();
    }, [url]);

    const searchMarvel = () =>{
        setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`)
    }

    return (
        <>
            <header>
                <div className="bg">
                    <img src="./img/bg.png" alt=""/>
                </div>
                <div className="search-bar">
                    <img src="./img/logo.png" alt="logo Marvel"/>
                    <input
                        type="search" placeholder="Procurar Herói" className="search"
                        onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchMarvel}/>
                    />
                </div>
            </header>
            <main>

                {
                    !items
                        ? <div className="error">An error occurred, contact an administrator.</div>
                        : items.map(item => {
                        return <Card key={item.id} item={item}/>
                    })
                }
            </main>
        </>
    );
}