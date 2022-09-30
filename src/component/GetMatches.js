import React from 'react';
import {useState} from "react";
import { useEffect } from 'react';
import Cricbuzz from './Cricbuzz';
import {getMatchInfo} from "../api/api";

function GetMatches() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatchInfo().then((data) => {
            setMatches(data.matches);
            console.log(data)
        }).catch((err) => console.log(err))
    }, [])

    

  return (
    <>
        <Cricbuzz/>
    </>
  )
}

export default GetMatches