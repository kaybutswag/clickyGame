import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
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
    score,
    open: false,
    message: ""
  };


onCloseModal = () => {
    this.setState({ open: false });
  };

chooseCard = id => {


  const checkClick=this.state.cards.filter(card =>card.id===id)
    if(checkClick[0].clicked===true){
      const reset=this.state.cards.map(card => {
        card.clicked=false;
    });
    this.setState({ reset,
                    open:true,
                    score:0,
                    message:"Drat! You already clicked that one. Let's play again."});
   }else if (this.state.score===24){
  const win=this.state.cards.map(card => {
        card.clicked=false;
    });
    this.setState({ win,
                    score:0,
                    open:true,
                    message:"Wowzers! A perfect game."});
  } else {

    const playcards= this.state.cards.map(card => {
      if(card.id === id ){
        card.clicked=true;
        this.state.score++;
      }
    });
    this.setState({ playcards});
  }

  };



  render() {
    const { open } = this.state;
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
        <div>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h2>{this.state.message}</h2>
        </Modal>
      </div>
         
      </Wrapper>
    );
  }
}

export default App;