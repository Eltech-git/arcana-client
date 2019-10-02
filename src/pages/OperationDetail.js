import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonImg, IonText,  IonAvatar, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle,IonFabButton,IonFab } from '@ionic/react';
import React from 'react';
import {arrowRoundBack, add} from 'ionicons/icons';
import {Link} from 'react-router-dom';
import Header from '../components/Header';
import Operation from '../components/Operation';
import LargeComment from '../components/LargeComment';

import '../theme/detail.css';

class OperationDetail extends React.Component {

	state = {
		header: {
			src: '../images/woman.jpg',
			case: ' Tradimento Bianchi e Rossi',
			cases: 4,
			image: '../images/lover.jpg'
		},
		comments: false,
		comment : {
			image: '../images/lover.jpg',
			largeContent: `L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi. L'amante del tradimento bianchi e Rossi è stato trovato in Via Roma 12, dove  incontrato la signora Rossi.`,
			smallContent: '',
		},
		operation: {
          comments: [],
					dayDone: 0,
          title: '',
					description: '',
					firstOCP: '',
					daysAssigned: 0,
					target: {
						pictures: [],
						name: ''
				}
		}
	}

	componentWillMount() {
		console.log('hello')
		let operation = this.props.location.operation
		console.log("log1 >>>>>>" + operation)
		this.setState({
			operation: operation
		})
	}

	componentWillReceiveProps(props) {
		console.log('hello')
		let operation = props.location.operation
		console.log("log2 >>>>" + operation)
		this.setState({
			operation: operation
		})
	}

	goBack = () => {
		this.props.history.goBack()
	}


	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
				<IonHeader>

					<IonToolbar className="detail-header">
						<IonGrid className="grid-detail">
						<Link to="/operations">
						<IonIcon className="back" icon={arrowRoundBack} />
						</Link>
							<IonAvatar className="text">
							<IonImg src={this.state.operation.target.pictures[0]}/>
							</IonAvatar>
							<IonText className="text">{this.state.operation.title}
							</IonText>
						</IonGrid>
					</IonToolbar>
				</IonHeader>
				{
					this.state.operation.comments.map((comment, i) =>
						<LargeComment comment={comment}/>
					)
				}

					<IonFab vertical="bottom" horizontal="end" slot="fixed" >
						<IonFabButton color="light">
							<IonIcon icon={add} />
					</IonFabButton>
					</IonFab>
				</IonContent>
	    </IonPage>
	  );
	}
};

export default OperationDetail;
