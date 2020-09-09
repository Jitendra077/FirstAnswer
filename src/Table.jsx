import React from 'react';
import "./App.css"

 const Table = (props) => {


    const Tabledata = (props) => {
        return (
            <div>
                <tr id>
                    <td>{props.data.firstName} </td>
                    <td>{props.data.lastName} </td>
                </tr>
            </div>
        )
    }

    return (
            <div>
                    <table  border = "1"className ="table">
                        <tr>
                             <th className = "header" style = {{color:"red"}}> House Stark </th>
                         </tr>
                       <tr>  
                       {props.tableData1.map(item =>{
                           return <Tabledata data = {item} 
                           />
                       })} 
                    </tr>
                    
                    <tr>
                         <th colSpan = "2"className = "header" style ={{color:"yellow"}} > House Targaryen </th>
                    </tr>
                   <tr id = "data2">
                    {props.tableData2.map(item => {
                        return <Tabledata data = {item}
                         />
                    })}
                    </tr>
               
               
                    </table>
            </div>

    )
}
export default Table;
