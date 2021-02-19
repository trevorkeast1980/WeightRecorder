import React, {useState, useEffect} from 'react';
import {weightData} from '../services/weights';
export const WeightTable = ({ }) => {

    const [weightEntries, setWeightEntries] = useState([]);

    useEffect(() => {
        weightData().then(weights => setWeightEntries(weights));
    },[]);



    return (

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                 {weightEntries.map(weightEntry =>
                    <tr>
                        <td>{weightEntry.date}</td>
                        <td>{weightEntry.weight}</td>
                        </tr>

                    )} 
            </tbody>
        </table>

    )
}