import React, {useState,useEffect} from 'react';

import NameListItem from './NameListItem';

function NameList() {
    const[loadData,setLoadData] = useState(new Date());
    const [nameList , setNameList] = useState([ 
        {
            id:1,    
            name: {
                    "title": "mr",
                    "first": "Brad",
                    "last": "gibson"
                },
            location: {
                    "street": "9278 new road",
                    "city": "kilcoole"
                },
    
            email:  "brad.gibson@example.com",
                    
            dob: {
                    "date": "1993-07-20T09:44:18.674Z",
                    "age": 26
                },      
            picture:{
                "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
            },        
        },
        {
            id:2,
            
            name: {
                    "title": "mr",
                    "first": "Dinuka",
                    "last": "gibson"
                },
            location: {
                    "street": "123 Road",
                    "city": "Ratnapura"
                },
    
            email:  "brad.dinuka@example.com",
                    
            dob: {
                    "date": "1993-07-20T09:44:18.674Z",
                    "age": 24
                },      
            picture:{
                "medium": "https://randomuser.me/api/portraits/med/men/77.jpg",
            },        
        },
    
        {
            id:4,
            
            name: {
                    "title": "mr",
                    "first": "John",
                    "last": "gibson"
                },
            location: {
                    "street": "150 Road",
                    "city": "Ratnapura"
                },
    
            email:  "brad.john@example.com",
                    
            dob: {
                    "date": "1993-07-20T09:44:18.674Z",
                    "age": 28
                },      
            picture:{
                "medium": "https://randomuser.me/api/portraits/med/men/79.jpg",
            },        
        }
        
    ]);

    useEffect(()=>{
        fetch("https://randomuser.me/api")
        .then((response) => {
                return response.json()
        })
        .then((responseData) =>{
            setNameList(nameList => [...nameList,responseData.results[0]]);
        });
    },[loadData]);
    
    const nameLIstComponent = () => {
        return nameList.map((aName)=>{
        return (
        
        <NameListItem 
        key={aName.id}
        name={aName.name.first}
        city={aName.location.city}
        location={aName.location.street}
        email={aName.email}
        dob={aName.dob.age}
        avatar={aName.picture.medium}
        />
        )
         } );
    };

    const addUserHandler = () =>{
       setLoadData(new Date())
    }
    return (
        <div className="container mt-4">
        <button className="btb btn-primary mb-2" onClick={addUserHandler}>Add Name</button>
       <ul className="list-group">{nameLIstComponent()}</ul> 
           
        </div>
    );
}
  
export default NameList;