import { useParams } from "react-router-dom";
import usePics from "../../hooks/usePics";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { v4 as uuid } from "uuid";
import { Wrap } from "@chakra-ui/react";
import Picture from "./Picture";

export default function PicsDashboard() {
  let { id } = useParams<{ id: string }>();

  const { pics, deletePic, handleDragEnd } = usePics(
    id === undefined ? id : parseInt(id!)
  );

  function render() {
    return pics.map((pic, index) => {
      return (
        <Picture key={uuid()} {...pic} index={index} deletePic={deletePic} />
      );
    });
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId={`pictures`} direction="horizontal">
          {(provided) => (
            <Wrap m="2" {...provided.droppableProps} ref={provided.innerRef}>
              {render()}
              {provided.placeholder}
            </Wrap>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
