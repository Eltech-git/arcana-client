import {IonGrid, IonText, IonCard, IonAvatar, IonItem } from '@ionic/react';
import React from 'react';
import '../theme/card.css';
import Operation from '../components/Operation';

class Agent extends React.Component {

	state= {
		agent: {
			src: '../images/agent.jpg',
			name: 'Sempronio',
			cases: 3
		},
		large: false
	}

	showOperations = () => {
		let size = this.state.large
		let large = !size

		this.setState({
			large: large
		})
	}


	render() {
		return (
			<IonCard className="card">

			<IonGrid className="grid-agent" onClick={this.showOperations}>
			<IonAvatar className="avatar">
				<img className="img" src={this.state.agent.src}/>
			</IonAvatar>
			<IonText className="text">{this.state.agent.name}</IonText>
			<IonText className="text">{this.state.agent.cases}</IonText>
			</IonGrid>
				<IonGrid className={this.state.large === true ? "" : "hidden"}>
					{
						[...Array(4)].map((n,i) =>
						<Operation goToDetail={this.props.goToDetail} />
					)
					}
				</IonGrid>
			</IonCard>


	  );
	}
};

export default Agent;
