
import { useState,useEffect } from "react";

const URL = 'https://api.npoint.io/6fe80fd8273d7a0957e9';

function useNetwork() {
 
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [isError, setError] = useState('');

    useEffect(()=> {
        setIsLoading(true);
        fetch(URL).then(res => res.json()).then(data => {
            setData(data?.data);
        }).catch(e => {
            console.log(e);
            setError(true);
        }).finally(()=> {
            setIsLoading(false);
        });
    },[]); 

    return {isLoading, data , isError}
}

export default useNetwork;