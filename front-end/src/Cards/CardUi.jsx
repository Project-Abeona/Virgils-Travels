import React from 'react';
import "./card-style.css";
const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src ={props.imgsrc} alt ="DI" className ="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"><b>{props.title}</b></h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <a href="#" className ="btn btn-outline-success">
                    {props.emailLink}
                </a>
            </div>
        </div>
    );

}

export default Card;