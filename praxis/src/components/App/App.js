import React, { Component } from 'react';
import logo from './marvel-banner.png';
import './App.css';
import HeroeOverview from '../HeroeOverview/HeroeOverview';
import heroesService from '../../services/heroesService';
import EnemieOverview from '../EnemieOverview/EnemieOverview';
import enemiesService from '../../services/enemiesService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heroes: [],
      enemies: []
    };
  }

  componentDidMount() {
    heroesService.getHeroes().then((heroes) => {
      this.setState({ heroes: heroes.data });
    });
    enemiesService.getEnemies().then((enemies) => {
      this.setState({ enemies: enemies.data });
    });
  }

  render() {
    let listHeroes  = this.state.heroes.map((heroe) => <HeroeOverview key={heroe.name} name={heroe.name} image={heroe.image} overview={heroe.history} link={heroe.link} />);
    let listEnemies = this.state.enemies.map((enemie) => <EnemieOverview key={enemie.name} name={enemie.name} image={enemie.image} overview={enemie.history} link={enemie.link} />);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h2>Heroes</h2>
        <div className="heroes-list">
          {listHeroes}
        </div>
         <div className="enemies-list">
          {listEnemies}
        </div>
      </div>
    );
  }
}

export default App;
