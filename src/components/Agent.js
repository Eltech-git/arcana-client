import { IonGrid, IonText, IonCard, IonAvatar } from "@ionic/react";
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
    large: false,
    component: this.props.component
  };

  showOperations = () => {
    let size = this.state.large;
    let large = !size;

    this.setState({
      large: large
    });
  };

  addAgent = () => {
    console.log(this.props.agent);
  };

  render() {
    return (
      <IonCard className="card">
        <IonGrid className="grid-agent">
          <IonAvatar className="avatar">
            <img className="img" src={this.props.agent.avatar} />
          </IonAvatar>
          <IonText className="text">{this.props.agent.name}</IonText>
          <IonText className="text">{`Op: ${this.props.agent.assignedOP.length}`}</IonText>
        </IonGrid>
        <IonText className="display" onClick={this.showOperations}>
          {this.state.showOperations === true
            ? "Nascondi operazioni"
            : "Visualizza operazioni"}
        </IonText>
        <IonGrid className={this.state.large === true ? "" : "hidden"}>
          {this.props.agent.assignedOP.map((operation, i) => (
            <Operation
              operation={operation}
              key={i}
              goToDetail={this.props.goToDetail}
            />
          ))}
        </IonGrid>
      </IonCard>
    );
  }
}

export default Agent;
