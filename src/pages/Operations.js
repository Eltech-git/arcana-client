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
  IonLabel
} from "@ionic/react";
import React from "react";
import Header from "../components/Header";
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";
import axios from "axios";
import "../theme/page.css";

class Operations extends React.Component {
  state = {
    user: {}
  };

  goToDetail = () => {
    this.props.history.push({
      pathname: "/operationdetail"
    });
  };
  componentDidMount() {
    let token = localStorage.getItem("token");
    axios.post(`http://localhost:4000/user?token=${token}`).then(res => {
      this.setState({
        user: res.data
      });
    });
  }

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          {[...Array(10).keys()].map(n => (
            <Operation goToDetail={this.goToDetail} />
          ))}
        </IonContent>
      </IonPage>
    );
  }
}

export default Operations;
