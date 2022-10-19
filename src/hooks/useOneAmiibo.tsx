import axios from "axios";
import { useState, useEffect } from "react";
import { amiiboProps } from "../utils/types";

const useOneAmiibo = (tail:string) => {
    const [amiibo, setAmiibo] = useState<amiiboProps>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      return () => {
        axios.get(`https://amiiboapi.com/api/amiibo/?tail=${tail}`).then(({data}) => {
            setAmiibo(data.amiibo[0] as amiiboProps)
        }).catch((err: Error) => {
            alert(err.message)
        }).finally(() => setLoading(false))
      }
    }, [tail])
    
    return { amiibo, loading}
}

export default useOneAmiibo