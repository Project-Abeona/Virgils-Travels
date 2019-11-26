import React from 'react';
import "../../static/css/Card-style.css";



const Card = props =>{

    let emailLink = "mailto:" + props.emailLink;

    return(
        
        <div className="card text-center shadow">
            <div className="overflow">
                <img src ={props.imgsrc} alt ={props.title} className ="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title"><b>{props.title}</b></h4>
                <p className="card-text text-secondary">
                    {props.text}
                </p>
                <a href={emailLink} className ="btn btn-outline-success">
                    {props.emailLink}
                </a>
            </div>
        </div>
    );

}

export default Card;