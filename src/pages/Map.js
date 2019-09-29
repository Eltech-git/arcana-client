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
import "../theme/tag.css";

const mapStyles = {
  width: "100%",
  height: "100%"
};

class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    agent: [
      {
        assignedOp: "Tradimento rossi",
        picture:
          "https://www.dandi.media/wp-content/uploads/2017/06/roger-moore-as-James-Bond.jpg",
        name: "Mario",
        lat: 42.6573929,
        lng: 12.09283475
      },
      {
        assignedOp: "Tradimento bianchi",
        picture: "https://www.wecanjob.it/moduli/output_immagine.php?id=613",
        name: "Paolo",
        latitude: 42.9384572,
        longitude: 12.09283475
      },
      {
        assignedOp: "Tradimento verdi",
        picture:
          "http://www.iferronline.com/images/652e873d-1a28-4bf9-baa9-502f49663969.JPG",
        name: "Giulio",
        latitude: 42.023948,
        longitude: 12.20938457
      },
      {
        assignedOp: "Tradimento rossi",
        picture:
          "https://upload.wikimedia.org/wikipedia/it/4/4e/Agente_Smart_-_Casino_totale_-_Trailer.png",
        name: "Nando",
        latitude: 42.2009823,
        longitude: 12.01938467
      },
      {
        assignedOp: "Tradimento verdi",
        picture:
          "https://www.repstatic.it/content/nazionale/img/2019/01/13/112758099-cbaa5e8b-3d81-4fd9-826f-af6f7647e27d.jpg",
        name: "Fernando",
        latitude: 42.2903845,
        longitude: 12.02938475
      },
      {
        assignedOp: "Tradimento rossi",
        picture:
          "https://www.dandi.media/wp-content/uploads/2017/06/roger-moore-as-James-Bond.jpg",
        name: "Giorgio",
        latitude: 42.6573929,
        longitude: 12.09283475
      }
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
    return this.state.agent.map((agent, index) => {
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
