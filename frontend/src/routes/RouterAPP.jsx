import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Inicio from '../components/Inicio';
import Registro from '../components/Registro';
import Login from "../components/Login";
import Opiniones from "../components/Opiniones";
import CrearOpiniones from "../components/CrearOpiniones";

import Amazonas from "../components/regiones/Amazonas";
import Andina from "../components/regiones/Andina";
import Caribe from "../components/regiones/Caribe";
import Orinoquia from "../components/regiones/Orinoquia";
import Pacifico from "../components/regiones/Pacifico";

import AmazonasD from "../components/departamentos/departamentosRegionAmazonica/AmazonasD";


// Toast
import { ToastProvider } from 'react-toast-notifications'

export function RouterAPP() {
    return (
        <Router>
            <ToastProvider>
                <Switch>
                    <Route exact path='/'>
                        <Inicio />
                    </Route>
                    <Route exact path='/registro'>
                        <Registro />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                    <Route exact path='/opiniones'>
                        <Opiniones />
                    </Route>
                    <Route exact path='/crearOpiniones'>
                        <CrearOpiniones />
                    </Route>
                    

                    {/* Regiones */}
                    <Route exact path='/amazonas'>
                        <Amazonas />
                    </Route>
                    <Route exact path='/andina'>
                        <Andina />
                    </Route>
                    <Route exact path='/caribe'>
                        <Caribe />
                    </Route>
                    <Route exact path='/orinoquia'>
                        <Orinoquia />
                    </Route>
                    <Route exact path='/pacifico'>
                        <Pacifico />
                    </Route>

                    {/* Departamentos Region Amazonica */}
                    <Route exact path='/AmazonasD'>
                        <AmazonasD />
                    </Route>


                </Switch>
            </ToastProvider>
        </Router>
    );
}