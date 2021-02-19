import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {weightData} from '../services/weights';
import ChartistGraph from 'react-chartist';

export const WeightChart = ({ }) => {

    const [weightEntries, setWeightEntries] = useState([]);

    useEffect(() => {
        weightData().then(weights => setWeightEntries(weights));
    },[]);

    console.log(weightEntries);

    var data = {
        labels: [],
        series: [[]]
      };

      var myArr = [];

      weightEntries.forEach(function (weightEntry) {
        data.labels.push(weightEntry.date);
        myArr.push(weightEntry.weight);
      });
      console.log(myArr);
      data.series.push(myArr);

    //   weightEntries.forEach(function (weightEntry) {
    //     data.series.push(weightEntry.weight);
    //   });
      

      var options = {
        high: 300,
        low: 0,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      };
  
      var type = 'Line'

    return (

        <div>
        <ChartistGraph data={data} options={options} type={type} />
      </div>

    )
}

