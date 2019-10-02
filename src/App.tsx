import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { map, list, person, add } from "ionicons/icons";
import Mappa from "./pages/Mappa";
import Operations from "./pages/Operations";
import OperationDetail from "./pages/OperationDetail";
import LocationDetail from "./pages/LocationDetail";
import Agents from "./pages/Agents";
import Add from "./pages/Add";
import Login from "./pages/Login";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/mappa" component={Mappa} exact={true} />
          <Route path="/operations" component={Operations} exact={true} />
          <Route
            path="/operationdetail"
            component={OperationDetail}
            exact={true}
          />
          <Route
            path="/locationdetail"
            component={LocationDetail}
            exact={true}
          />
          <Route path="/add" component={Add} exact={true} />
          <Route path="/agents" component={Agents} />
          <Route exact path="/" render={() => <Redirect to="/app" />} />
        </IonRouterOutlet>
        <IonTabBar color="dark" slot="bottom">
          <IonTabButton tab="tab1" href="/mappa">
            <IonIcon icon={map} />
            <IonLabel>Mappa</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/operations">
            <IonIcon icon={list} />
            <IonLabel>Operazioni</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/agents">
            <IonIcon icon={person} />
            <IonLabel>Agenti</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/add">
            <IonIcon icon={add} />
            <IonLabel>Aggiungi</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
