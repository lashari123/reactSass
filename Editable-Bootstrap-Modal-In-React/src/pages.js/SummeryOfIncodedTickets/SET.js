import React, { Component } from 'react';

import Table from 'react-bootstrap/Table'
import '../../App.css'
import SETModal from './SETModal.js';

class SET extends Component {
  constructor(props) {
    super(props);

    this.replaceModalItem = this.replaceModalItem.bind(this);
    this.saveModalDetails = this.saveModalDetails.bind(this);
    this.state = {
      requiredItem: 0,
      brochure: [
        {
          title: "Gold",
          msg: "24k Bracelet",
          incedent:'lashari',
          ticket:'danyal'
        }, {
          title: "Silver",
          msg: "Necklace",
          incedent:'lashari',
          ticket:'danyal'
        }, {
          title: "Diamond",
          msg: "Ring",
          incedent:'lashari',
          ticket:'danyal'
        },
        {
          title: "Gold",
          msg: "24k Bracelet",
          incedent:'lashari',
          ticket:'danyal'
        },
        {
          title: "Gold",
          msg: "24k Bracelet",
          incedent:'lashari',
          ticket:'danyal'
        },
        {
          title: "Gold",
          msg: "24k Bracelet",
          incedent:'lashari',
          ticket:'danyal'
        },
        {
          title: "Gold",
          msg: "24k Bracelet",
          incedent:'lashari',
          ticket:'danyal'
        },
      ]
    }
  }

  replaceModalItem(index) {
    this.setState({
      requiredItem: index
    });
  }

  saveModalDetails(item) {
    const requiredItem = this.state.requiredItem;
    let tempbrochure = this.state.brochure;
    tempbrochure[requiredItem] = item;
    this.setState({ brochure: tempbrochure });
  }

  deleteItem(index) {
    let tempBrochure = this.state.brochure;
    tempBrochure.splice(index, 1);
    this.setState({ brochure: tempBrochure });
  }

  render() {    
    const brochure = this.state.brochure.map((item, index) => {
      return (
        
        <tr key={index}>
          <td className="text">{item.title}</td>
          <td className="text">{item.incedent}</td>
          <td className="text">{item.ticket}</td>
          <td className="text">{item.msg}</td>
          <td className="text">{item.title}</td>
          <td>
            <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
              onClick={() => this.replaceModalItem(index)}>edit</button> {" "}
            <button className="btn btn-danger" onClick={() => this.deleteItem(index)}>remove</button>
          </td>
        </tr>
      )
    });
    
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.brochure[requiredItem];
    return (
      <div>
       
        <Table responsive size="sm">

        <thead className="headings">
    <tr>
    <th >Incident No.</th>
    <th >TDate Encoded</th>
    <th >Person</th>
    <th >Incident</th>
    <th >Encoder</th>
    <th >Action</th>
      
    
    </tr>
  </thead>
 
  <tbody>
    
  {brochure}
   
  </tbody>
</Table>
        <SETModal
          title={modalData.title}
          msg={modalData.msg}
          saveModalDetails={this.saveModalDetails}
        />
      </div>
    );
  }
}

export default SET;
