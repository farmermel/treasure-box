import React from 'react';
import Header from './Header.js';
import Treasures from './Treasures.js';
import '../styles/App.scss';


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      treasures: [],
    }

    this.submitTreasure = this.submitTreasure.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.vote = this.vote.bind(this);
  }

  submitTreasure(userInput) {
    let treasures = this.state.treasures;

    userInput.rating = 0;
    treasures.push(userInput)
    this.setState({
      treasures: treasures
    })

  }

  deleteCard(card) {
    let treasures = this.state.treasures;
    let index = card.props.index;

    treasures.splice(index, 1);
    this.setState({
      treasures: treasures
    })
  }

  vote(card, vote) {
    let index = card.props.index;
    let treasures = this.state.treasures;

    if (vote === 'upvote' && treasures[index].rating < 3) {
      treasures[index].rating++;
      this.setState({
          treasures: treasures
      })
    } else if (vote === 'downvote' && treasures[index].rating > 0) {
      treasures[index].rating--;
      this.setState({
        treasures: treasures
      })
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Header submitTreasure={ this.submitTreasure } />
        <Treasures treasures={ this.state.treasures }
                   deleteCard={ this.deleteCard }
                   vote={ this.vote } />
      </div>
    )
  }
}












// import React from 'react';
// import Header from './Header.js';
// import Treasures from './Treasures.js';
// import '../styles/App.scss';


// export default class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       treasures: [],
//     }

//     this.submitTreasure = this.submitTreasure.bind(this);
//     this.deleteCard = this.deleteCard.bind(this);
//     this.vote = this.vote.bind(this);
//   }

//   submitTreasure(userInput) {
//     let key = Date.now();

//     userInput.rating = 0;
//     userInput.myKey = key;
//     let inputJson = JSON.stringify(userInput);

//     localStorage.setItem(key, inputJson);
//     let cardsInStorage = this.checkStorage();

//     this.setTreasures(cardsInStorage);
//   }

//   componentDidMount() {
//     let cardsInStorage = this.checkStorage();
//     this.setTreasures(cardsInStorage);
//   }

//   setTreasures(cardsInStorage) {
//     this.setState({
//       treasures: cardsInStorage
//     })
//   }

//   checkStorage() {
//     let cardsInStorage = [];

//     for( let i = 0; i < localStorage.length; i++) {
//       let card = JSON.parse(localStorage
//                      .getItem(localStorage
//                      .key(i)));

//       cardsInStorage.push(card);
//     }
//     return cardsInStorage;
//   }

//   deleteCard(card) {
//     console.log(card.props.details.myKey)
//     let key = card.props.details.myKey;

//     localStorage.removeItem(key);
//     let cardsInStorage = this.checkStorage();

//     this.setState({
//       treasures: cardsInStorage
//     })
//   }

//   vote(card, vote) {
//     let index = card.props.index;
//     let treasures = this.state.treasures;

//     if (vote === 'upvote' && treasures[index].rating < 3) {

//       treasures[index].rating++;
//       this.setState({
//           treasures: treasures
//       })
//     } else if (vote === 'downvote' && treasures[index].rating > 0) {
//       treasures[index].rating--;
//       this.setState({
//         treasures: treasures
//       })
//     }
//     // if (vote === 'upvote' && this.state.rating < 3) {
//       // let newRating = this.state.rating++
//       // console.log(this.state.rating++)
//       // this.setState({
//       //   rating: newRating
//       // })
//     // }
//   }

//   render() {
//     console.log(this.state.treasures)
//     return (
//       <div className="App">
//         <Header submitTreasure={ this.submitTreasure } />
//         <Treasures treasures={ this.state.treasures }
//                    deleteCard={ this.deleteCard }
//                    vote={ this.vote } />
//       </div>
//     )
//   }
// }