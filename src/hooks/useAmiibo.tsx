import axios from "axios";
import { useState, useEffect } from "react";
import { amiiboProps } from "../utils/types";

const useAllAmiibo = () => {
    const [amiiboList, setAmiiboList] = useState<amiiboProps[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      return () => {
        axios.get("https://amiiboapi.com/api/amiibo/").then(({data}) => {
            setAmiiboList(data.amiibo as amiiboProps[])
        }).catch((err: Error) => {
            alert(err.message)
        }).finally(() => setLoading(false))
      }
    }, [])
    
    return {amiiboList, loading}
}

export default useAllAmiibo