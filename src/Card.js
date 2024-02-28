import React from "react";

function Card ({ color, name, title }) {
    return (
        <div className={`card text-white bg-${color} mb-3`} style={{ maxWidth: "18rem" }}>
            <div className="card-header">{name}</div>
            <div className="card-body" style={{ paddingTop: "0.5rem" }}>
                <h5 class="card-title">{title}</h5>
                <p className="card-text" style={{ marginBottom: "0px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    );  
}

function CenteredCards() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row">
                <div className="col-md-4">
                    <Card color="primary" name="Card 01" title="Blue" />
                </div>
                <div className="col-md-4">
                    <Card color="danger" name="Card 02" title="Red" />
                </div>
                <div className="col-md-4">
                    <Card color="success" name="Card 03" title="Green" />
                </div>
            </div>
        </div>
    );
}

export default CenteredCards;
