import React from 'react';
import styles from './CardsContainer.module.scss';
import { apiCall } from '../../api/mockedApi';
import Card from './Card';


export default class CardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
    }

    this.fetchData = this.fetchData.bind(this);
  }
  
  fetchData() {
    apiCall().then( response => {
      const cards = response ? response : [];
      this.setState({cards})
    })
  }
  componentDidMount() {
    this.fetchData();
  }  
    
  render() {
    const { cards } = this.state;
    return (
      <div className={styles.container}>
        { 
          cards.length === 0 ? <div>No cards yet</div> : cards.map( props => <Card key={props.id} {...props} /> )
        }
      </div>
    );
  }
}