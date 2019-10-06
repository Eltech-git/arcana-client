import {
  IonGrid,
  IonText,
  IonCard,
  IonImg,
  IonAvatar,
  IonCardContent,
  IonButton,
  IonItem
} from "@ionic/react";
import React from "react";
import SmallComment from "./SmallComment";
import "../theme/card.css";
import "../theme/comment.css";

class Operation extends React.Component {
  state = {
    header: {
      src: "../images/woman.jpg",
      agent: "Sempronio",
      cases: 4
    },
    showComment: false
  };

  showComment = () => {
    let showComment = this.state.showComment;
    let change = !showComment;
    this.setState({
      showComment: change
    });
  };


	goToDetail = () => {

    this.props.history.push({
      pathname: "/operationdetail",
			operation: this.props.operation
    });

  };
  render() {
    return (
      <IonCard className="card">
        <IonGrid
          className="grid-operation" onClick={() => this.goToDetail()} >
          <IonAvatar className="avatar">
            <img className="img" src={this.props.operation.target.pictures} />
          </IonAvatar>
          <IonText className="text"> {this.props.operation.title}</IonText>
          <IonText className="text">{this.props.operation.daysAssigned}</IonText>
        </IonGrid>
				<IonText className="display" onClick={this.showComment}>
				          {this.state.showComment === true
				            ? "Nascondi commenti"
				            : "Visualizza commenti"}
				 </IonText>
				 <IonGrid className={this.state.showComment === true ? "" : "hidden"}>
          {this.props.operation.comments.map((comment, i) => (
            <SmallComment comment={comment} key={i} />
          ))}
        </IonGrid>
      </IonCard>
    );
  }
}

export default Operation;
