import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ScrapHeader from './components/ScrapHeader/ScrapHeader'
import ScrapBody from './components/ScrapBody/ScrapBody'


class App extends Component {

  componentDidMount(){
    document.body.style.background = "#282c34";
   }

  render(){
    return (
      <>
      <ScrapHeader />
      <ScrapBody />
      </>

    );
  }
  
}

export default App;
