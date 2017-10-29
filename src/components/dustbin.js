import React from 'react';
import ItemTypes from '../Constants';
import { DropTarget} from 'react-dnd';

const dustbinTarget = {
  drop(props) {
    console.log("in dustbin.drop:", props);
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

export function DustBin(props) {
  const { connectDropTarget, isOver } = props;

  return connectDropTarget(
    <div className={`DustBin ${isOver ? "targetOver" : ""}`}>
      from DustBin component
    </div>
  );
}

export default DropTarget(ItemTypes.TRASH_PIECE, dustbinTarget, collect)(DustBin);
