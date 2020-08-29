import React from 'react';
import styles from './CardsCreationForm.module.scss';

export default class CardsCreationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      price: '',
      title: '',
      imageUrl: '',
      about: '',
    }
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeImageUrl = this.handleChangeImageUrl.bind(this);
    this.handleChangeAbout = this.handleChangeAbout.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    const id = new Date();
    const {price, title, imageUrl, about} = this.state;
    const {addNewCard} = this.props;
    addNewCard({id, price, title, imageUrl, about});
    this.setState( state => ({
      price: '',
      title: '',
      imageUrl: '',
      about: ''
    }));
    event.preventDefault();
  }

  handleChangePrice(event) {
    this.setState({price: event.target.value});
  }
  handleChangeTitle(event) {
    this.setState({title: event.target.value});
  }
  handleChangeImageUrl(event) {
    this.setState({imageUrl: event.target.value});
  }
  handleChangeAbout(event) {
    this.setState({about: event.target.value})
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Price:
          <input
            type="number"
            className={styles.inputPrice}
            value={this.state.price}
            onChange={this.handleChangePrice}
            required 
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            className={styles.inputTitle}
            value={this.state.title}
            onChange={this.handleChangeTitle}
            required 
          />
        </label>

        <label>
        Image url:
          <input
            type="text"
            value={this.state.imageUrl}
            onChange={this.handleChangeImageUrl}
          />
        </label>

        <label>
        Description:
          <input
            type="text"
            value={this.state.about}
            onChange={this.handleChangeAbout}
            required 
          />
        </label>
        <button type="submit">creat card</button> 
      </form>
    );
  }
}