import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonBadge,
  IonIcon,
  IonLabel,
  IonButton,
  IonInput,
  IonItem,
  withIonLifeCycle
} from "@ionic/react";
import { locate } from "ionicons/icons";
import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import MapContainer from "../components/MapContainer";
import "../theme/page.css";
import "../theme/tag.css";
import axios from "axios";
import dotenv from "dotenv";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class Mappa extends React.Component {
  state = {
    url: `http://563a1f42.ngrok.io/userspos`,
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    userspos: [
      {
        avatar: "",
        name: "",
        lat: 0,
        lng: 0,
        assignedOP: []
      }
    ]
  };

  ionViewWillEnter() {
    console.log("ionViewWillEnter event fired");
    axios
      .get(this.state.url)
      .then(res => {
        let userspos = this.state.userspos;
        userspos = res.data;
        this.setState({
          userspos: userspos
        });
        console.log(this.state);
      })
      .catch(err => {});
    console.log(this.state.userspos);
  }

  render() {
    return (
      <IonPage>
        <MapContainer />
      </IonPage>
    );
  }
}
export default withIonLifeCycle(Mappa);
