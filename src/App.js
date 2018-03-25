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
      console.log("you lose");
    }else{

    const playcards= this.state.cards.map(card => {
      if(card.id === id ){
        card.clicked=true;
        this.state.score ++;
      }
    });
    this.setState({ playcards });
  }



console.log(this.state.cards);

  };



  render() {
    return (
      <Wrapper>
        <Title>Spring Match</Title>
        <div className="scoreKeeper">{this.state.score}</div>
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