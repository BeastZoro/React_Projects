import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Dashboard = () =>{

    const entity = useSelector(state => state)  
    console.log('Hello enitity', entity)  
    return(
        <>
            <p>DashBoard page</p>
        </>
    )
}

export default Dashboard;