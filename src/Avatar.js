import React, { Component } from 'react';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

 class Avatar extends Component{
     constructor(){
         super();
         this.state={
             name:"Welcome to React world"
         }
     }

     namechange(){
        // this.setState({
           //  name:"Hello "
         //})
         window.location.href="https://www.linkedin.com/in/deepak001ahirwar/";

         
     }
     namechange2(){
        
         window.location.href="https://www.linkedin.com/in/sagarkumar117/";

         
     }
     namechange3(){
      
         window.location.href="https://www.linkedin.com/in/ranjeet-pal-378aa7193/";

         
     }
render(){
        const Avatarlistarray=[
        {
            id:1,
             name:"Deepak Ahirwar",
              work:"React devloper" 
        },
        {
            id:2,
            name:"Sagar",
            work:"Java devloper"
        
        },
        {
            id:3,
             name:"Ranjeet",
              work:"python devloper"
            
        },
        {
            id:4,
             name:"Sumit kashyap",
              work:"frontend devloper"
            
        }



    ]

  const arraycard=  Avatarlistarray.map((avatarcard,i)=>
    { 
        return <Avatarlist key={i} id={Avatarlistarray[i].id}
             name={Avatarlistarray[i].name}
              work={Avatarlistarray[i].work}/>
            
    })


    return(
        <div className="mainpage">
            <h1 className="tc">{this.state.name} </h1>
            {arraycard}
           
            <br/>
            
            <button className="ma5" onClick={()=>this.namechange()}>Contacts to Deepak</button>
            <button className="ma5" onClick={()=>this.namechange2()}>Contacts to sagar</button>
            <button className="ma5" onClick={()=>this.namechange3()}>Contacts to ranjeet </button>
        
        </div>
        
    );


}}

export default Avatar;
