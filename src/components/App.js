import React, {Component} from 'react';
import '../styles/App.css';

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

    handleNameChange(event){
      this.setState({
      value: event.target.value
      })
    }
    



  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:

    handleFormSubmit(event){
      event.preventDefault()
      

      this.setState({
        pilot: this.state.value,
        value: ""
      })
    }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentWillMount(){
  var url ='https://swapi.co/api/vehicles/' 
  fetch(url)
    .then(response => {
      
        return response.json();
    })
    .then(data => {
        console.log('sup', data)
        this.setState({vehicles:data.results});
    });
}

  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {

    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
   
     
    return (  
       
        <div className="App">      
          <header className = "jumboTron">
          <h1>Star Wars</h1>
          <h3>The Vehicles of Star Wars</h3>
          </header>
          <section className = "form">
            <form onSubmit = {this.handleFormSubmit}>
              <label>What's your name pilot?</label>
              <br />
              <input type = 'text' value = {this.state.value} onChange = {this.handleNameChange} name = 'value'/>
              <input type = 'submit' value = 'Submit'/>
              <br />
              <h1 className = "pilotName" value = {this.state.pilot}>{this.state.pilot}</h1>
            </form>
          </section>
          <div className = "cardSection">
            {this.state.vehicles.map(vehicle => (
            <div className= "card" key = {vehicle.name}>
                <h4>Name: {vehicle.name}</h4>
                <h6>Model: {vehicle.model}</h6>
              <div className="sub-card-block">
                <h5>Specs</h5>
              </div>
              <div className="sub-card-block">
                <h6>Manufacturer: {vehicle.manufacturer}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Class: {vehicle.vehicle_class}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Passengers: {vehicle.passengers}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Crew: {vehicle.crew}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Length: {vehicle.length}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Max Speed: {vehicle.max_atmosphering_speed}</h6>
              </div>
              <div className="sub-card-block">
                <h6>Capacity: {vehicle.cargo_capacity}</h6>
              </div>
            </div>
            ))}           
          </div>
        </div>   
    )
  }
}

export default App;
