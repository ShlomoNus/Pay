import {
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
type Props = {
  isOpen: boolean;
  onClose: () => void;
  url: string;
};
export default function ImageModal({ isOpen, url, onClose }: Props) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent>
      <ModalCloseButton/>
          <Image src={url} />
      </ModalContent>
    </Modal>
  );
}
