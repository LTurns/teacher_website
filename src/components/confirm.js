import React from 'react';
import Price from './prices'

class Confirm extends React.Component {

 constructor(props) {
   super(props);
   this.state = { service: props.item.service };
 }

 handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value });
 }

 // saveItem = () => {
 //   const item = {};
 //   item.service = this.state.service;
 //   // do more with item object as required (e.g. save to database)
 // }

 render() {
   return (
     <Price name="service" value={this.state.service} handleChange={this.handleChange} />
   )
 }

}