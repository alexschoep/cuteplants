import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Selectors from './components/Selectors';
import Suggestions from './components/Suggestions';

class App extends Component {
  state = {
    selectors: [
      {
        name: 'Type',
        description: 'What type of plant are you looking for?',
        image: 'TypeSelector.jpg',
        options: [
          {
            title: 'Viney',
            image: 'VineyType.jpg',
            selected: false
          },
          {
            title: 'Leafy',
            image: 'LeafyType.jpg',
            selected: false
          },
          {
            title: 'Succulent',
            image: 'SucculentType.jpg',
            selected: false
          }
        ]
      },
      {
        name: 'Light',
        description: 'How much light will your plant get?',
        image: 'LightSelector.jpg',
        options: [
          {
            title: 'Indirect',
            image: 'IndirectLight.jpg',
            selected: false
          },
          {
            title: 'Direct',
            image: 'DirectLight.jpg',
            selected: false
          }
        ]
      },
      {
        name: 'Care',
        description: 'How often can you care for your plant?',
        image: 'CareSelector.jpg',
        options: [
          {
            title: 'Infrequently',
            image: 'InfrequentCare.jpg',
            selected: false
          },
          {
            title: 'Occasionally',
            image: 'OccasionalCare.jpg',
            selected: false
          },
          {
            title: 'Frequently',
            image: 'FrequentCare.jpg',
            selected: false
          }
        ]
      }
    ]
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Header />
          <Selectors selectors={this.state.selectors} />
          <Suggestions />
        </div>
      </Provider>
    );
  }
}

export default App;
