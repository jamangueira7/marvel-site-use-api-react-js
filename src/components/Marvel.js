import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Marvel = () => {
    const { id } = useParams();
    const [item, setItem] = useState();

    const baseURL = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${process.env.REACT_APP_MD5_HASH}`;

    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(baseURL);
            setItem(res.data.data.results)
        }

        fetch();
    }, [id]);

     return (
        <>
            {
                (!item)
                    ? <div className="error">An error occurred, contact an administrator.</div>
                    : (
                    <div className="box-content">
                        <div className="right-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=""/>
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
            }
        </>
    );
}