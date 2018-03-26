import React, { Component } from "react";
import MatchCard from "./components/MatchCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json";
import "./App.css";
const score=0;


const shuffled = array => array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

class App extends Component {
  state = {
    cards,
    score
  };



chooseCard = id => {


  const checkClick=this.state.cards.filter(card =>card.id===id)
    if(checkClick[0].clicked===true){
      alert("That was a double click! Let's try again.");
      const reset=this.state.cards.map(card => {
        card.clicked=false;
        this.state.score=0;
    });
    this.setState({ reset });
   }else if (this.state.score===24){
  alert("Wow!!! A perfect game. Let's play again.");
  const reset=this.state.cards.map(card => {
        card.clicked=false;
        this.state.score=0;
    });
    this.setState({ reset });
  } else {

    const playcards= this.state.cards.map(card => {
      if(card.id === id ){
        card.clicked=true;
        this.state.score ++;
      }
    });
    this.setState({ playcards });
  }

  };



  render() {
 
    return (
      <Wrapper>
        <Title>One Each: Springtime</Title>
        <h2 className="tagline">Try to click each icon once and only once</h2>
        <div className="scoreKeeper">Your Score: {this.state.score}</div>
        {shuffled(this.state.cards).map(cardx => (
          <MatchCard
            chooseCard={this.chooseCard}
            id={cardx.id}
            key={cardx.id}
            image={cardx.image}
            clicked={cardx.clicked}
          />
         ))}
      </Wrapper>
    );
  }
}

export default App;