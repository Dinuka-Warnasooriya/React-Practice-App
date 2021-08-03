import React from 'react';
import moment from 'moment';
import './NameListItem.css'

function NameListItem(props) {
    return (
        
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-2">
                     <img src={props.avatar} alt={props.name} className="rounded-circle"/>
                </div>
                <div className="col-10">
                    <h2>{props.name}</h2>
                    <p>
                        {props.city} | {props.email}
                    </p>
                   <small>{moment(props.dob).format('DD-MM-YYYY')}</small>
                </div>
            </div>
            
           
        </li>
          
        
    );
}

export default NameListItem;