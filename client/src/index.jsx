import React from 'react';
import ReactDOM from 'react-dom';
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

  render() {
    return (
      <div>
        <h1>this is eenders correctly, this is it breh</h1>
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
