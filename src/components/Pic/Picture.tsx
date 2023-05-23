import { Draggable } from "react-beautiful-dnd";
import { PicType } from "../../types";
import { Box, IconButton, Image, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { DeleteIcon } from "@chakra-ui/icons";
import ImageModal from "./ImageModal";
type Props = PicType & {
  deletePic: (id: number) => void;
  index: number;
};
export default function Picture({
  thumbnailUrl,
  id,
  index,
  title,
  deletePic,
  url
}: Props) {

  const { isOpen, onOpen, onClose } = useDisclosure()


  return (
    <Box key={uuid()} flexBasis="23%">
      <Draggable key={id} draggableId={id.toString()} index={index}>
        {(provided) => (
          <VStack
            position="relative"
            key={id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ImageModal isOpen={isOpen} url={url} onClose={onClose}/>
            <IconButton
              top={3}
              right={2}
              aria-label="delete picture"
              position="absolute"
              onClick={() => {
                deletePic(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
            <Text position='absolute' top='20'>{title}</Text>
            <Image
            onClick={onOpen}
              src={thumbnailUrl}
              fit="cover"
              width="100%"
              height="100%"
            />
          </VStack>
        )}
      </Draggable>
    </Box>
  );
}
