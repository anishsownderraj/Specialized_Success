import React, {Component} from 'react';
import NavBar from './components/NavBar'
import Card from './components/Card';
import './styles/index.css';
import './styles/NavBar.css';


class App extends Component {
    render(){
		return(

			<div>
				<NavBar></NavBar>
				<Card></Card>
			</div>
		);
    }
}

export default App;