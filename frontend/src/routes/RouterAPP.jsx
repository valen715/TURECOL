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
import Contacto from '../components/Contacto';


//Regiones
import Amazonas from "../components/regiones/Amazonas";
import Andina from "../components/regiones/Andina";
import Caribe from "../components/regiones/Caribe";
import Orinoquia from "../components/regiones/Orinoquia";
import Pacifico from "../components/regiones/Pacifico";

//Region del Amazonas
import AmazonasD from "../components/departamentos/departamentosRegionAmazonica/AmazonasD";
import Caqueta from "../components/departamentos/departamentosRegionAmazonica/Caqueta";
import Guainia from "../components/departamentos/departamentosRegionAmazonica/Guainia";
import Guaviare from "../components/departamentos/departamentosRegionAmazonica/Guaviare";
import Putumayo from "../components/departamentos/departamentosRegionAmazonica/Putumayo";
import Vaupes from "../components/departamentos/departamentosRegionAmazonica/Vaupes";

//Region Andina
import Antioquia from "../components/departamentos/departamentosRegionAndina/Antioquia";
import Boyaca from "../components/departamentos/departamentosRegionAndina/Boyaca";
import Caldas from "../components/departamentos/departamentosRegionAndina/Caldas";
import Cundinamarca from "../components/departamentos/departamentosRegionAndina/Cundinamarca";
import Huila from "../components/departamentos/departamentosRegionAndina/Huila";
import NorteSantander from "../components/departamentos/departamentosRegionAndina/NorteSantander";
import Quindio from "../components/departamentos/departamentosRegionAndina/Quindio";
import Risaralda from "../components/departamentos/departamentosRegionAndina/Risaralda";
import Santander from "../components/departamentos/departamentosRegionAndina/Santander";
import Tolima from "../components/departamentos/departamentosRegionAndina/Tolima";

//Region Caribe
import Atlantico from "../components/departamentos/departamentosRegionCaribe/Atlantico";
import Bolivar from "../components/departamentos/departamentosRegionCaribe/Bolivar";
import Cesar from "../components/departamentos/departamentosRegionCaribe/Cesar";
import Cordoba from "../components/departamentos/departamentosRegionCaribe/Cordoba";
import Guajira from "../components/departamentos/departamentosRegionCaribe/Guajira";
import Magdalena from "../components/departamentos/departamentosRegionCaribe/Magdalena";
import SanAyP from "../components/departamentos/departamentosRegionCaribe/SanAyP";
import Sucre from "../components/departamentos/departamentosRegionCaribe/Sucre";

//Region Orinoquía
import Arauca from "../components/departamentos/departamentosRegionOrinoquia/Arauca";
import Casanare from "../components/departamentos/departamentosRegionOrinoquia/Casanare";
import Meta from "../components/departamentos/departamentosRegionOrinoquia/Meta";
import Vichada from "../components/departamentos/departamentosRegionOrinoquia/Vichada";

//Region Pacífica
import CaucaP from "../components/departamentos/departamentosRegionPacifica/CaucaP";
import Choco from "../components/departamentos/departamentosRegionPacifica/Choco";
import Narino from "../components/departamentos/departamentosRegionPacifica/Narino";
import ValleCauca from "../components/departamentos/departamentosRegionPacifica/ValleCauca";

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
                    <Route exact path='/Contacto'>
                        <Contacto/>
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
                    <Route exact path='/Caqueta'>
                        <Caqueta />
                    </Route>
                    <Route exact path='/Guainia'>
                        <Guainia />
                    </Route>
                    <Route exact path='/Guaviare'>
                        <Guaviare />
                    </Route>
                    <Route exact path='/Putumayo'>
                        <Putumayo />
                    </Route>
                    <Route exact path='/Vaupes'>
                        <Vaupes />
                    </Route>

                    {/* Departamentos Region Andina */}
                    <Route exact path='/Antioquia'>
                        <Antioquia />
                    </Route>
                    <Route exact path='/Boyaca'>
                        <Boyaca />
                    </Route>
                    <Route exact path='/Caldas'>
                        <Caldas />
                    </Route>
                    <Route exact path='/Cundinamarca'>
                        <Cundinamarca />
                    </Route>
                    <Route exact path='/Huila'>
                        <Huila />
                    </Route>
                    <Route exact path='/NorteSantander'>
                        <NorteSantander />
                    </Route>
                    <Route exact path='/Quindio'>
                        <Quindio />
                    </Route>
                    <Route exact path='/Risaralda'>
                        <Risaralda />
                    </Route>
                    <Route exact path='/Santander'>
                        <Santander />
                    </Route>
                    <Route exact path='/Tolima'>
                        <Tolima />
                    </Route>

                    {/* Departamentos Region Caribe */}
                    <Route exact path='/Atlantico'>
                        <Atlantico />
                    </Route>
                    <Route exact path='/Bolivar'>
                        <Bolivar />
                    </Route>
                    <Route exact path='/Cesar'>
                        <Cesar />
                    </Route>
                    <Route exact path='/Cordoba'>
                        <Cordoba />
                    </Route>
                    <Route exact path='/Guajira'>
                        <Guajira />
                    </Route>
                    <Route exact path='/Magdalena'>
                        <Magdalena />
                    </Route>
                    <Route exact path='/SanAyP'>
                        <SanAyP />
                    </Route>
                    <Route exact path='/Sucre'>
                        <Sucre />
                    </Route>

                    {/* Departamentos Region Orinoquía */}
                    <Route exact path='/Arauca'>
                        <Arauca />
                    </Route>
                    <Route exact path='/Casanare'>
                        <Casanare />
                    </Route>
                    <Route exact path='/Meta'>
                        <Meta />
                    </Route>
                    <Route exact path='/Vichada'>
                        <Vichada />
                    </Route>

                    {/* Departamentos Region Pacífica */}
                    <Route exact path='/CaucaP'>
                        <CaucaP />
                    </Route>
                    <Route exact path='/Choco'>
                        <Choco />
                    </Route>
                    <Route exact path='/Narino'>
                        <Narino />
                    </Route>
                    <Route exact path='/ValleCauca'>
                        <ValleCauca />
                    </Route>


                </Switch>
            </ToastProvider>
        </Router>
    );
}