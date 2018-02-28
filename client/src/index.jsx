import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import bluebird from 'bluebird';
import Description from './components/Description.jsx';
import LeftAbout from './components/LeftAbout.jsx'
import Map from './components/Map.jsx';
import Ratings from './components/Ratings.jsx';
import RightAbout from './components/RightAbout.jsx';
import Title from './components/Title.jsx';
import TopTags from './components/TopTags.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      restaurant: {}
    };
    //this will be the object that will be taken from our database
    //this state will be passed to each of the child components so they can access 
    //each of the properties that are within the parent's stateful object
  }

  //create an onload search for a random item to render to the page since this component 
  //does not a specified search or anything for a specific item at the moment and is completely
  //reliant on the search component for all rendering of information

  //this will generate a random id number between 1-200 and will render the page initially
  randomSearch() {
    let randomId = Math.floor(Math.random() * (200 - 1)) + 1;
    
    //this axios request will send a concurrent request to the server to get
    //information for both the about and location sections
    axios.all([this.getInformation(randomId), this.getLocation(randomId)])
      .then(axios.spread((information, location) => {
        console.log(information, location);
      }));
  }

  //send GET request to get the about information for the restaurant 
  getInformation(restaurant_id) {
    axios.get(`/restaurant/${restaurant_id}/about`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  //send GET request to get the location coordinates for the restaurant
  getLocation(restaurant_id) {
    axios.get(`/restaurant/${restaurant_id}/location`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  //use native Component Will Mount to invoke the randomSearch function above before rendering
  componentWillMount() {
    this.randomSearch();
    // this.setState({
    //   location: ,
    //   restaurant: 
    // })
  }

  render() {
    return (
      <div>
        <h1>FULLSTACK FAT JOINT BREH</h1>
        <Title test={this.state.test} restaurant={this.state.restaurant}/>
        <Ratings restaurant={this.state.restaurant} />
        <TopTags restaurant={this.state.restaurant}/>
        <Description restaurant={this.state.restaurant}/>
        <LeftAbout restaurant={this.state.restaurant}/>
        <Map restaurant={this.state.restaurant} location={this.state.location}/>
        <RightAbout restaurant={this.state.restaurant}/>  
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
