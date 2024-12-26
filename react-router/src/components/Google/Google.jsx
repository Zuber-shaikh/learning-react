import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Google = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // const google = useEffect( () => {
    //     fetch("https://open.er-api.com/v6/latest/USD")
    //     .then((res) => res.json())
    //     .then((data) => setData(data["rates"]["INR"]))
    // } ,[])
  return (
    <div>{data["rates"]["INR"]}</div>
  )
}

export default Google
export const currencyLoader = async () => {
    const response = await fetch("https://open.er-api.com/v6/latest/USD")
    return response.json()
}