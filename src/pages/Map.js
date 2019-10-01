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
import "../theme/page.css";
import "../theme/tag.css";
import axios from "axios";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  state = {
    url: "http://localhost:4000/userspos",
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    userspos: []
  };

  ionViewDidEnter() {
    console.log("ionViewWillEnter event fired");
    axios
      .get(this.state.url)
      .then(res => {
        let userspos = this.state.userspos;
        userspos = res.data;
        this.setState({
          userspos: userspos
        });
        console.log(res.data);
      })
      .catch(err => {});
    console.log(this.state.users);
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  toAgentPage = () => {
    this.props.history.push({
      pathname: "/agents"
    });
  };
  displayMarkers = () => {
    return this.state.userspos.map((agent, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: agent.latitude,
            lng: agent.longitude
          }}
          onClick={this.onMarkerClick}
          name={
            <div className="tagGrid">
              <div>
                <img
                  className="tag"
                  style={{ backgroundImage: "url(" + agent.picture + ")" }}
                />
              </div>
              <div>
                <div className="agent">
                  <h7>Agente:</h7>
                  <h4>{agent.name}</h4>
                </div>
                <div className="operation" onClick={e => this.toAgentPage()}>
                  <h7>Operazione:</h7>
                  <h4>{agent.assignedOp}</h4>
                </div>
              </div>
            </div>
          }
        ></Marker>
      );
    });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <Map
            google={this.props.google}
            zoom={7.5}
            style={mapStyles}
            initialCenter={{ lat: 42.5, lng: 12.285 }}
          >
            {this.displayMarkers()}
            <InfoWindow
              content={"ciao"}
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
              onClick={this.toAgentPage}
            >
              <div>{this.state.selectedPlace.name}</div>
            </InfoWindow>
          </Map>
        </IonContent>
      </IonPage>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDw6F2Cr9PiMBkMbnLQ7FatUMTi8Q9GOSM"
})(MapContainer);
