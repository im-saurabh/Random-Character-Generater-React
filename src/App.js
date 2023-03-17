import React from 'react'
import './App.css';

class StarWars extends React.Component {

constructor() { 
  super()
  this.state ={
    image: null,
    name: null,
    height: null,
    homeworld: null,
    gender:null,
  }
}

  getNewCharacter() {
    const randomNumber = Math.round(Math.random() * 88)
    console.log("get a new character")
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      this.setState ({
        image: data.image,
        name: data.name,
        height: data.height,
        homeworld: data.homeworld,
        gender: data.gender,
        loadedCharacter: true,
      })
    })
    
  }
  render() {
  return (
    <div>
      {
        this.state.loadedCharacter &&
        <div>
            <img src={this.state.image} className="App-logo" alt="logo" />
            <h1>{this.state.name}</h1>
            <p>Height= {this.state.height}</p>
            <p>HomeWorld= {this.state.homeworld}</p>
            <p>Gender= {this.state.gender}</p>
        </div>
      }
        <button type='button' onClick={() => this.getNewCharacter()} className='btn'>Randomize Character</button>
    </div>
  )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
