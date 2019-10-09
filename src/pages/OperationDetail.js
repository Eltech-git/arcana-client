import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonImg,
  IonText,
  IonAvatar,
  IonTabBar,
  IonTabButton,
  IonBadge,
  IonIcon,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
  IonFabButton,
  IonFab,
  IonItem,
  IonSelectOption,
  IonSelect
} from "@ionic/react";
import "../theme/detail.css";
import React from "react";
import { arrowRoundBack, add } from "ionicons/icons";
import { Link } from "react-router-dom";
import axios from "axios";
import Camera from "../components/Camera";
import Header from "../components/Header";
import Operation from "../components/Operation";
import LargeComment from "../components/LargeComment";

import "../theme/detail.css";

class OperationDetail extends React.Component {
  state = {
    operation: {
      comments: [],
      dayDone: 0,
      title: "",
      description: "",
      firstOCP: "",
      daysAssigned: 0,
      target: {
        pictures: [],
        name: "",
        _id: ""
      }
    },
    url: `${process.env.REACT_APP_API}/operations/5d943cb303dd9307d82d432e`
  };

  state = {
    operation: {
      _id: "",
      comments: [],
      dayDone: 0,
      title: "",
      description: "",
      firstOCP: "",
      daysAssigned: 0,
      target: {
        pictures: [],
        name: ""
      }
    }
  };

  componentWillMount() {
    console.log("hello");
    let operation = this.props.location.operation;
    console.log("log1 >>>>>>", operation);
    this.setState({
      operation: operation
    });
  }

  componentDidReceiveProps(props) {
    console.log("hello");
    let operation = props.location.operation;
    console.log("log2 >>>>", operation);
    this.setState({
      operation: operation
    });
  }
  sendPhoto = image => {
    // axios.post("faccia/sdsdfdsf");
    // window.location = "record";
    this.props.history.push({
      pathname: "/app/selectimage",
      image: image,
      _id: this.state.operation.target._id,
      operationID: this.state.operation._id
    });
  };
  goBack = () => {
    console.log("this.props.history", this.props.history);
    this.props.history.goBack();
  };

  goToComLoc = comment => {
    this.props.history.push({
      pathname: "/app/locationdetail",
      comment: comment
    });
    // this.props.history.push({
    //   pathname: "/app/locationdetail"
    //   // lat: this.state.lat,
    //   // lng: this.state.lng
    // });
  };

  render() {
    return (
      <IonPage>
        <IonContent className="page">
          <IonHeader>
            <IonToolbar className="detail-header">
              <IonGrid className="grid-detail">
                {/*<Link to="/app/operations">
                  <IonIcon className="back" icon={arrowRoundBack} />
                </Link>*/}
                <IonIcon
                  className="back"
                  icon={arrowRoundBack}
                  onClick={this.goBack}
                />
                <IonAvatar className="text">
                  <IonImg src={this.state.operation.target.pictures[0]} />
                </IonAvatar>
                <IonText className="text">{this.state.operation.title}</IonText>
              </IonGrid>
            </IonToolbar>
          </IonHeader>
          {this.state.operation.comments.reverse().map((comment, i) => (
            <LargeComment goToComLoc={this.goToComLoc} comment={comment} />
          ))}

          <IonFab vertical="bottom" horizontal="end" slot="fixed"></IonFab>
          <Camera sendPhoto={this.sendPhoto} />
        </IonContent>
      </IonPage>
    );
  }
}

export default OperationDetail;
