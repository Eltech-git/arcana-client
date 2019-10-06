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
import axios from "axios";
import { Plugins } from "@capacitor/core";
const { Geolocation } = Plugins;

const mapStyles = {
  width: "100%",
  height: "100%"
};

const mylng = Geolocation.getCurrentPosition().then(function(result) {
  let mylng = result.coords.longitude;
  return mylng;
});

const usersposition = () => {
  return new Promise(function(resolve, reject) {
    axios
      .patch("http://4c921f55.ngrok.io/users/5d9434bb03dd9307d82d4329", {
        lat: this.state.mylatitude,
        lng: this.state.mylongitude
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};
const wait = Geolocation.watchPosition({}, (position, err) => {});

class MapContainer extends React.Component {
  state = {
    url: "http://687c40a9.ngrok.io/userspos",
    users: [
      {
        avatar: "",
        email: "",
        location: "",
        name: "",
        surname: "",
        birthDate: "",
        phone: "",
        assignedOP: [
          {
            title: "",
            comments: [],
            target: {
              pictures: []
            }
          }
        ],
        companyIDnum: 0,
        agentAssigned: []
      }
    ],
    assignedOP: [],
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    // userspos: [this.props.user],
    // operations: this.props.user.assignedOP,

    mylatitude: 0,
    mylongitude: 0
  };
  componentWillMount() {
    axios
      .get(this.state.url)
      .then(res => {
        let users = this.state.users;
        users = res.data;
        this.setState({
          users: users
        }).then(this.getmyloc);
        console.log(res.data);
      })
      .catch(err => {});

    Geolocation.getCurrentPosition().then(result => {
      let gotlongitude = result.coords.longitude;
      let gotlatitude = result.coords.latitude;
      this.setState({
        mylatitude: gotlatitude,
        mylongitude: gotlongitude
      });
    });
  }

  UNSAFE_componentWillMount() {
    axios
      .get(this.state.url)
      .then(res => {
        let users = this.state.users;
        users = res.data;
        this.setState({
          users: users
        });
      })
      .catch(err => {});

    Geolocation.getCurrentPosition({ setTimeout: 15000 }).then(result => {
      let gotlongitude = result.coords.longitude;
      let gotlatitude = result.coords.latitude;
      this.setState({
        mylatitude: gotlatitude,
        mylongitude: gotlongitude
      }).then(
        axios
          .patch("http://687c40a9.ngrok.io/users/5d9434bb03dd9307d82d4329", {
            lat: gotlatitude,
            lng: gotlongitude
          })
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      );
    });
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
    return this.state.users.map((agent, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: agent.lat,
            lng: agent.lng
          }}
          onClick={this.onMarkerClick}
          name={
            <div className="tagGrid">
              <div>
                <img
                  className="tag"
                  style={{ backgroundImage: "url(" + agent.avatar + ")" }}
                />
              </div>
              <div>
                <div className="agent">
                  <h7>Agente:</h7>
                  <h4>{agent.name}</h4>
                </div>
                <div className="operation" onClick={e => this.toAgentPage()}>
                  <h7>Operazione:</h7>
                  {agent.assignedOP.map((o, i) => (
                    <h6>{o.title}</h6>
                  ))}
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
      <Map
        google={this.props.google}
        zoom={7.5}
        style={mapStyles}
        initialCenter={{ lat: 42.5, lng: 12.285 }}
      >
        <Marker
          position={{
            lat: this.state.mylatitude,
            lng: this.state.mylongitude
          }}
        />
        {() => this.getmyloc()}
        {console.log(mylng)}
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
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDw6F2Cr9PiMBkMbnLQ7FatUMTi8Q9GOSM"
})(MapContainer);
