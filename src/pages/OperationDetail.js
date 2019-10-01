import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonImg, IonText,  IonAvatar, IonTabBar, IonTabButton, IonBadge, IonIcon, IonLabel, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonCardTitle} from '@ionic/react';
import React from 'react';
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
		}
	}


	ionViewWillEnter() {
		let comment = this.state.comment
		console.log(comment)
		let content = this.state.comment.largeContent
		console.log(content)
		let smallContent = content.substring(0, 95) + " ..."
		console.log(smallContent)
		comment.smallContent = smallContent

		console.log(smallContent)
		this.setState({
			comment: comment
		})

	}


	render() {
		return (
	    <IonPage>
	      <IonContent className="page">
				<IonHeader>
					<IonToolbar className="detail-header">
						<IonGrid className="grid-detail">
							<IonAvatar className="text">
							<IonImg className="image" src={this.state.header.src}/>
							</IonAvatar>
							<IonText className="text">{this.state.header.case}
							</IonText>
						</IonGrid>
					</IonToolbar>
				</IonHeader>
				{
				[...Array(10).keys()].map(n =>
					<LargeComment comment={this.state.comment}/>
				)
				}
				</IonContent>
	    </IonPage>
	  );
	}
};

export default OperationDetail;
