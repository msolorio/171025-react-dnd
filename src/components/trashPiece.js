import React from 'react';
import ItemTypes from '../Constants';
import { DragSource } from 'react-dnd';

const trashPieceSource = {
  beginDrag(props) {
    return {
      index: props.index
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    
    if (monitor.didDrop()) {
      props.onTrashPieceDrop(props.index);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

export function TrashPiece(props) {
  const { connectDragSource, isDragging } = props;

  return connectDragSource(
    <div className="TrashPiece" style={{
      backgroundColor: isDragging ? '#aaaacc' : '#ccc'
    }}>
      {props.name}
    </div>
  );
}

export default DragSource(ItemTypes.TRASH_PIECE, trashPieceSource, collect)(TrashPiece);
