import React from 'react';
import {useState} from "react";
import { useEffect } from 'react';
import Cricbuzz from './Cricbuzz';
import {getMatchInfo} from "../api/api";

function GetMatches() {

    const [matches, setMatches] = useState([])
    const limit = matches.slice(0,5);
    useEffect(() => {
        getMatchInfo().then((data) => {
            setMatches(data.matches);
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    

  return (
    <>
        <Cricbuzz key={limit.id} limit={limit}/>
    </>
  )
}

export default GetMatches