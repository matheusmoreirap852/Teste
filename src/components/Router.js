import {	BrowserRouter as	Router,	Route,	Switch	}	from 'react-router-dom'
//import ApiService from "../service/ApiService";
import React	from "react"


/*
O Switch, é um componente que recebe vários componentes Route
 e dado o caminho que for passado na URL um deles é renderizado.
*/

const AppRouter =	()	=>	{
    return(
        <div>    
        <Router>
            <div className="col-md-6">
                <h1	className="text-center"	style={style}>Valores </h1>
            <Switch>
                
            </Switch>
            </div>
        </Router>
        </div>
    )
    }
    const style =	{
    color:	'red', margin:	'10px', textAlign:	'center'
}
export default	AppRouter;