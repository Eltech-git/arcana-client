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
    comment: {},
		smallComment: ''
  };


	componentWillMount(){
		let comment = this.props.comment
		let text = this.props.comment.text
		let smallComment = text.substring(0, 20)
		console.log(smallComment)
		this.setState({
			comment: comment,
			smallComment: smallComment
		})
	}

  render() {
    return (
      <IonItem className="comment">
        <IonGrid className="grid-smallcomment">
          <IonAvatar className="avatar">
            <img className="img" src={this.props.comment.picture} />
          </IonAvatar>
          <IonText className="text">{this.state.smallComment}</IonText>
        </IonGrid>
      </IonItem>
    );
  }
}

export default SmallComment;
