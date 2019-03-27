import React from "react";

class Travel extends React.Component {
    render() {
        return(
            
            <div>
                <h1>{this.props.destination}</h1>
                <h4>{this.props.country}</h4>
                <img src={this.props.photo} alt={this.props.country} />
                <p>{this.props.distance}</p>
              </div>
        );
    }
}

export default Travel;