import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonRow,
  IonCol,
  IonText,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonLabel,
  IonButton,
  IonCardContent,
  IonItem,
  IonAvatar,
  IonGrid,
  IonTitle
} from "@ionic/react";
import React from "react";
import "../theme/comment.css";

class SmallComment extends React.Component {
  state = {
    comment: {
      image: "../images/lover.jpg"
    }
  };

  render() {
    return (
      <IonItem className="comment">
        <IonGrid className="grid-smallcomment">
          <IonAvatar className="avatar">
            <img className="img" src={this.props.c.picture} />
          </IonAvatar>
          <IonTitle className="text">{this.props.c.text}</IonTitle>
        </IonGrid>
      </IonItem>
    );
  }
}

export default SmallComment;
