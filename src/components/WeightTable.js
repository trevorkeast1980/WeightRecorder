import React from 'react';
import {weightData} from '../services/weights';

export const WeightTable = ({ }) => {

let weights = weightData();
console.log(weights);


    return (

        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
                 {/* {weights.data.map(weight =>
                    <tr>{weight.date}</tr>

                    )}  */}
            </tbody>
        </table>

    )
}