import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Flex,
} from "@chakra-ui/react";
import "./Profile.scss";

function Profile({ isOpen, onClose }) {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center" justifyContent="center" >
          <ModalHeader w="50%" h="2%">Profile</ModalHeader>
          <ModalCloseButton w="3%" h="3%" />
          <ModalBody w="50%" h="70%" bg="#FFFFFF">안녕하세요</ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default Profile;
