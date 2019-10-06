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
  IonTitle,
  IonImg,
  withIonLifeCycle
} from "@ionic/react";
import { volumeHigh, pin } from "ionicons/icons";
import React from "react";
import "../theme/comment.css";

class LargeComment extends React.Component {
  state = {
    comment: {},
    stateContent: false
  };

  showLargeContent = () => {
    let comment = this.state.comment;
    comment.stateContent = !comment.stateContent;

    this.setState({
      comment: comment
    });
  };

  componentDidMount() {
    let comment = this.props.comment;

    this.setState({
      comment: comment
    });
  }

  render() {
    return (
      <IonCard className="largecomment">
        <IonGrid className="divlarge">
          <img className="img" src={this.props.comment.picture} />
          <IonButton className="divBtn" href="/locationdetail">
            <IonIcon className="icon" icon={pin} />
          </IonButton>
          <IonButton className="divBtn">
            <IonIcon className="icon" icon={volumeHigh} />
          </IonButton>
        </IonGrid>
        <IonCardContent
          className="content"
          color="white"
          onClick={this.showLargeContent}
        >
          {this.props.comment.text}
        </IonCardContent>
      </IonCard>
    );
  }
}

export default withIonLifeCycle(LargeComment);
