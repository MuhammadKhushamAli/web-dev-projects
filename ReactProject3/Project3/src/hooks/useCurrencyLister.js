import {useEffect, useState } from "react";

export default function useCurrencyLister(currency)
{
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then(res => res.json())
        .then(res => setData(res['rates']))
        .catch((res) => console.log(`Failed To Fetch ${res}`)); 
    }, [currency]);
    return data;
}