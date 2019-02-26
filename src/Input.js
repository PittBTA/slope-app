import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '3725 Sutherland Dr, Pittsburgh, PA'
    };
  };
  handleChange = (e) =>{
      this.setState({address: e.target.value});
  }

  submitPosition = function (e) {
    e.preventDefault();

    var apikey = '8b5a94c6580e435c80bd9fbc4fbb7a58';
    var address = this.state.address;

    var api_url = 'https://api.opencagedata.com/geocode/v1/json'

    var request_url = api_url
     + '?'
     + 'key=' +encodeURIComponent(apikey)
     + '&q=' + encodeURIComponent(address)
     + '&pretty=1'
     + '&no_annotations=1';

    // see full list of required and optional parameters:
    // https://opencagedata.com/api#forward

    var request = new XMLHttpRequest();
    request.open('GET', request_url, true);

    request.onload = function() {
    // see full list of possible response codes:
    // https://opencagedata.com/api#codes
    var data = null;
     if (request.status === 200){
       // Success!
       data = JSON.parse(request.responseText);
       alert(data.results[1].geometry.lat + ', ' + data.results[1].geometry.lng);

     } else if (request.status <= 500){  // We reached our target server, but it returned an error
       console.log("unable to geocode! Response code: " + request.status);
       data = JSON.parse(request.responseText);
       console.log(data.status.message);
     } else {
       console.log("server error");
     }
    };
    request.onerror = function() {  // There was a connection error of some sort
     console.log("unable to connect to server");
    };

    request.send();  // make the request
  };

  render() {
    return (
      <div id='input'>
        <form onSubmit={ this.submitPosition.bind(this) }>
          <input type='text' placeholder='Address' value={this.state.address} onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default Input;
