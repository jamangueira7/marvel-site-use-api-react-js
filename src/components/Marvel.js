import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const Marvel = () => {
    const { id } = useParams();
    const [item, setItem] = useState();

    const md5hash = `c47295561127eec2e6efc378a64f0d4a`;
    const publicKey = `87972729642c1e41dcba909747394e95`;
    const baseURL = `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${publicKey}&hash=${md5hash}`;

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