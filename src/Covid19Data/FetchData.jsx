import React, { useEffect, useState } from 'react'
import './FetchData.css'

const FetchData = () => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const apiUrl = 'https://data.covid19india.org/data.json';
        const res = await fetch(apiUrl);
        const actualData = await res.json();
        setData(actualData.statewise);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className="main-heading">
                    <h1 className='mb-5 text-danger text-center'> <span className='font-weight-bold text-success'> INDIA </span> COVID-19🦠 Dashboard</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-primary">
                        <thead>
                            <tr className='text-center text-uppercase'>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                {/* <th>Updated</th> */}
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curVal, index) => {
                                    return (
                                        <tr className='text-center' key={index} >
                                            <td> {curVal.state} </td>
                                            <td> {curVal.confirmed} </td>
                                            <td> {curVal.recovered} </td>
                                            <td> {curVal.deaths} </td>
                                            <td> {curVal.active} </td>
                                            {/* <td> {curVal.Updated} </td> */}
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default FetchData;
