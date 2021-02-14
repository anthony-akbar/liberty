import React, {Component} from 'react';
import './App/App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbars from "./Navbar/Navbars";
import DriverList from "./DriverList/DriverList";

class App extends Component {
    state = {
        driverList: [
            {
                id: 1,
                name: "Steven Jones",
                unit: "1012",
                phone: "(832) 212-0221",
                driverType: "Solo",
                truckType: "Power Only",
                location: "Houston, TX",
                status: "OFF",
                update: "",
                notes: ""
            },
            {
                id: 2,
                name: "Ruel Yadao",
                unit: "73303",
                phone: "(850) 566-5915",
                driverType: "Solo",
                truckType: "Power Only",
                location: "Dallas, TX",
                status: "OFF",
                update: "",
                notes: ""
            },
            {
                id: 3,
                name: "Mani Abdelilah",
                unit: "10",
                phone: "(734) 330 8781",
                driverType: "Solo",
                truckType: "Power Only",
                location: "Dallas, TX",
                status: "OFF",
                update: "",
                notes: ""
            }
        ],
        loadList: []
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Navbars/>
                    <Route path="/driverlist">
                        <DriverList data={this.state.driverList}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    };
}

export default App;
