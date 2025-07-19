import { useState } from "react";
import GitHubDataFetch from "./GithubDataFetch";
import { useEffect } from "react";
import { useLoaderData } from "react-router";

export default function GitHub()
{
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // useEffect(()=>{
    //    fetch("https://api.github.com/users/muhammadkhushamali")
    //    .then((res) => {
    //     return res.json();
    //    })
    //    .then(res => {
    //     setData(res);
    //    })
    // },[])
    return(
        <main>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
            <img src={data.avatar_url}/>
        </main>
    );
}