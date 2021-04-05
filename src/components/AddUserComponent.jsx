import {	BrowserRouter as	Router,	Route,	Switch	}	from 'react-router-dom'
import React	from "react";
//import ApiService from "../service/ApiService";



const AppRouter =	()	=>	{
    return(
        <div>
        <Router>
            <div className="col-md-6">
                <h1	className="text-center"	style={style}>Soluti React</h1>
            <Switch>
                <Route path="/add"	component={AddUserComponent}	/>    
            </Switch>
            </div>
        </Router>
        </div>
    )
    }
    const style =	{
    color:	'red', margin:	'10px', textAlign:	'center'
    }
export default AppRouter;