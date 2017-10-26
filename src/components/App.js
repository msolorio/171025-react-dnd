import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DustBin from './dustbin';
import TrashPiece from './trashPiece';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <DustBin />
        <div className="trashPieceRow">
          <TrashPiece />
          <TrashPiece />
          <TrashPiece />
          <TrashPiece />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
