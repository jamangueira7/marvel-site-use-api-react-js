import React, {useEffect, useState} from "react";
import { Card } from "./Card";
import axios from "axios";

export const Main = () => {
    const baseURL = `${process.env.REACT_APP_URL}?ts=1&offset=0&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`;

    const [url, setUrl] = useState(baseURL);
    const [total, setTotal] = useState(0);
    const [offset, setOffset] = useState(0);
    const [isDisabledPrevious, setIsDisabledPrevious] = useState(true);
    const [isDisabledNext, setIsDisabledNext] = useState(false);
    const [items, setItems] = useState();
    const [search,setSearch]=useState("");

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItems(res.data.data.results)
            setTotal(res.data.data.total)
            console.log(res)
        }

        fetch();
    }, [url]);

    const searchMarvel = () =>{
        setUrl(`${process.env.REACT_APP_URL}?nameStartsWith=${search}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`);
    }

    const handlePrevious = () =>{
        if((offset - 20) <= 0) {
            setIsDisabledPrevious(true);
            return;
        }

        setOffset(offset - 20);
        setUrl(`${process.env.REACT_APP_URL}?&offset=${offset}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`);
        setIsDisabledPrevious(false);
        setIsDisabledNext(false);
    }

    const handleNext = () =>{
        if((offset + 20) >= total) {
            setIsDisabledNext(true);
            return;
        }

        setOffset(offset + 20);
        setUrl(`${process.env.REACT_APP_URL}?&offset=${offset}&ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`);
        setIsDisabledNext(false);
        setIsDisabledPrevious(false);
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
            <div className="new-page">
                <button
                    type="submit"
                    className="bnt-move"
                    onClick={handlePrevious}
                    disabled={isDisabledPrevious}
                >&laquo; Previous</button>
                <button
                    type="submit"
                    className="bnt-move"
                    onClick={handleNext}
                    disabled={isDisabledNext}
                >Next &raquo;</button>
            </div>
        </>
    );
}