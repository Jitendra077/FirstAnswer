import React, {useState} from 'react';
import Table from "./Table";




 const SearchBox = (props) => {


     return(
    <div>
        <input type = "text" 
        placeholder = "search"
        style = {{height :"25px",width:"373px",marginLeft :"10px" }}

        />
    </div>
     )
}


class Home extends React.PureComponent {

    state  = {

            Data1 : [
                         {firstName:"Rob Stark",lastName:"Winterfell"},
                         {firstName:"Arya Stark",lastName:"Winterfell"},
                         {firstName:"Sansa Stark", lastName: "Winterfell"}
                    ],
           
           Data2 : [
               
                       {firstName : "John Snow", lastName: "Castle Black"},
                        {firstName: "Daenerys Targaryen", lastName : "Dragon Stone"}
                    ],    
    }                                                                       

   
    render() {

        return (
            <div className ="container" >
                <SearchBox />
                 <Table tableData1 = {this.state.Data1} 
                        tableData2 = {this.state.Data2}
                />
                
            </div>
        );
    }


        
}

export default Home;

