import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <div>
    <h1>{destination}</h1>
    <h4>{country}</h4>
    <img src={photo} alt={country} />
    <p>{distance}</p>
    </div>
);

export default Travel;