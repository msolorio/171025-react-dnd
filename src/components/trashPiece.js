import React from 'react';
import ItemTypes from '../Constants';
import { DragSource } from 'react-dnd';

const trashPieceSource = {
  beginDrag(props) {
    return {};
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
      TrashPiece Component
    </div>
  );
}

export default DragSource(ItemTypes.TRASH_PIECE, trashPieceSource, collect)(TrashPiece);
