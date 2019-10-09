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
import { arrowRoundBack } from "ionicons/icons";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import "../theme/tag.css";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class LocationDetail extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    agent: [],
    comment: this.props.location.comment
  };

  componentWillMount() {
    console.log(this.props.location);
    console.log(this.props.location.comment);
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

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonIcon
                onClick={this.goBack}
                className="arrowBack"
                icon={arrowRoundBack}
              />
            </IonToolbar>
          </IonHeader>
          <Map
            google={this.props.google}
            zoom={7.5}
            style={mapStyles}
            initialCenter={{ lat: 42.5, lng: 12.285 }}
          >
            <Marker
              position={{
                lat: this.state.comment.lat,
                lng: this.state.comment.lng
              }}
            />
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
})(LocationDetail);
