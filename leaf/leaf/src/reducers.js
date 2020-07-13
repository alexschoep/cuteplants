import { combineReducers } from 'redux';

import { OPTION_SELECTED } from './actions';

const initialState = {
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

function selectorReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case OPTION_SELECTED:
      console.log(state);
      return state;

  }
}

export default combineReducers({
  selectorReducer: selectorReducer
});