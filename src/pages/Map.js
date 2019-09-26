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
  IonItem
} from "@ionic/react";
import { locate } from "ionicons/icons";
import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "../theme/page.css";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    agentLoc: [
      { lat: 42.6573929, lng: 12.09283475 },
      { latitude: 42.9384572, longitude: 12.09283475 },
      { latitude: 42.023948, longitude: 12.20938457 },
      { latitude: 42.2009823, longitude: 12.01938467 },
      { latitude: 42.2903845, longitude: 12.02938475 },
      { latitude: 42.6573929, longitude: 12.09283475 }
    ]
  };

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
    return this.state.agentLoc.map((agentLoc, index) => {
      return (
        <Marker
          style={{ color: "black" }}
          key={index}
          id={index}
          position={{
            lat: agentLoc.latitude,
            lng: agentLoc.longitude
          }}
          onClick={this.onMarkerClick}
          name={agentLoc[index]}
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
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
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
