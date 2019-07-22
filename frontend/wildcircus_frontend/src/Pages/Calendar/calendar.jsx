import React from 'react';
import { Table } from 'reactstrap';
import { connect } from 'react-redux';
import {
  fetchPlaces,
  createPlace,
  updatePlace,
  deletePlace
} from '../../stores/actions/places';
import './calendar.scss'
import Axios from 'axios';

const prettifyDate = (birthdateString) => {
  if (birthdateString) {
    let murricanBirthdate = birthdateString.split('T')[0].split('-')
    let prettyBirthdate = murricanBirthdate[2] + '/' + murricanBirthdate[1] + '/' + murricanBirthdate[0]
    return prettyBirthdate
  }
  else return 'Non spécifiée'
}
export  class Place extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      place: {
        price: '',
        picture: '',
        description: '',
        adress: '',
        dated: '',
          },
          places:[]
    };
  }

  componentDidMount() {
    // this.props.fetchPlaces();
    // console.log("dans le componentDidMount",this.props.fetchPlaces())
    Axios.get("/api/v1/place")
    .then((response) => {console.log("je suis dans le componentDidMount",response)
  this.setState({places:response.data.place});
    })
    .catch((error) => console.log(error))

  }

  

render() {
  return (
    <Table dark className="tableCircusCalendar">
      <thead className="tableHeader">
        <tr>
          <th>Date</th>
          <th>Adress</th>
          <th>Description</th>
          <th>Pictures</th>
          <th></th>


        </tr>
      </thead>
      {
        this.state.places.map((place) => {
          return (
              <tbody>
              <tr>
                <th scope="row">{prettifyDate(place.dated)}</th>
                <td>{place.adress}</td>
                <td>{place.description}</td>
                <img src={place.picture} width="100px" alt=""/>
                <td><button className="buttonCalendar">Cart</button></td>
    
              </tr>
            </tbody>
    
            )
    
        })
      }
    </Table>
  );
}
}


const mapDispatchToProps = {
  fetchPlaces,
  createPlace,
  updatePlace,
  deletePlace
};
const mapStateToProps = (state) => ({
  places: state.place

})

export default connect(mapStateToProps, mapDispatchToProps)(Place)
