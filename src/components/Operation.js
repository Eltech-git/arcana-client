import {IonGrid,IonText, IonCard, IonImg, IonAvatar, IonCardContent, IonButton, IonItem} from '@ionic/react';
import React from 'react';
import SmallComment from './SmallComment';
import '../theme/card.css';
import '../theme/comment.css';

class Operation extends React.Component {

	state = {
		header: {
			src: '../images/woman.jpg',
			agent: 'Sempronio',
			cases: 4
		},
		comments: false,
	}

	showComments = (event) => {
		let comments = this.state.comments
		let changed = !comments

		this.setState({
			comments: changed
		})
	}



	render() {
		return (
			<IonCard className="card">
			<IonGrid className="grid-operation" onClick={() => this.props.goToDetail()}>
			<IonAvatar className="avatar">
				<img className="img" src={this.state.header.src}/>
			</IonAvatar>
			<IonText className="text"> Tradimento Bianchi e Rossi</IonText>
			<IonText className="text">23/09</IonText>
			</IonGrid>

		<IonText className="display" onClick={this.showComments}>{this.state.comments === true ? "Nascondi commenti" : "Visualizza commenti"}</IonText>
		<IonGrid className={this.state.comments === true ? "" : "hidden"}>
			<SmallComment/>
			<SmallComment/>
			<SmallComment/>
		</IonGrid>
	</IonCard>


	  );
	}
};

export default Operation;
