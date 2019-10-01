import { IonGrid, IonText, IonCard, IonAvatar, IonItem } from "@ionic/react";
import React from "react";
import "../theme/card.css";
import Operation from "../components/Operation";

class Agent extends React.Component {
  state = {
    agent: {
      src: "../images/agent.jpg",
      name: "Sempronio",
      cases: 3
    },
    large: false
  };

  showOperations = () => {
    let size = this.state.large;
    let large = !size;

    this.setState({
      large: large
    });
  };

  render() {
    return (
      <IonCard className="card">
        <IonGrid className="grid-agent" onClick={this.showOperations}>
          <IonAvatar className="avatar">
            <img className="img" src={this.props.a.avatar} />
          </IonAvatar>
          <IonText className="text">{this.props.a.name}</IonText>
          <IonText className="text">{`Op: ${this.props.a.assignedOP.length}`}</IonText>
        </IonGrid>
        <IonGrid className={this.state.large === true ? "" : "hidden"}>
          {this.props.a.assignedOP.map((a, i) => (
            <Operation o={a} key={i} />
          ))}
        </IonGrid>
      </IonCard>
    );
  }
}

export default Agent;
