
import axios from 'axios';

export const weightData = async () => {
  return axios.get(`http://localhost:8000/weights`)
  .then(function (response) {
    console.log(response.data);
    return response;
  })
}

export const refreshWeights = async () => {
  const res = await fetch('http://localhost:8000/weights', {
  mode: 'cors',  
  method: 'GET',
    headers: {'Content-Type': 'application/json'},
});
    const weights = await res.json();

    return weights;
};

export const appendWeight = async (weight) => {
    const res = await fetch('http://localhost:8000/weights', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(weight),
    });

    const appendWeight = await res.json();

    return appendWeight;
}