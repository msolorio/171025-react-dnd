import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DustBin from './dustbin';
import TrashPiece from './trashPiece';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trashPieces: [
        {name: "paper"},
        {name: "plastic"},
        {name: "gum"}
      ]
    };

    this.handleTrashPieceDrop = this.handleTrashPieceDrop.bind(this);
  }

  handleTrashPieceDrop(index) {
    let newTrashPieces = this.state.trashPieces;
    newTrashPieces = newTrashPieces.slice(0, index).concat(newTrashPieces.slice(index + 1));

    this.setState({trashPieces: newTrashPieces});
  }

  render() {
    return (
      <div className="App">
        <DustBin />
        <div className="trashPieceRow">
          {
            this.state.trashPieces.map((piece, index) => {
              return (
                <TrashPiece name={piece.name}
                  index={index}
                  key={index}
                  onTrashPieceDrop={this.handleTrashPieceDrop} />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
