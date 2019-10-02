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
import Agents from "./pages/Agents";
import Add from "./pages/Add";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import App from "./App";

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

const Routes: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/login" component={Login} exact={true} />
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/app" component={App} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/app" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default Routes;
