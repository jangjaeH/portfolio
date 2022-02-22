import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Image,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import "./Profile.scss";

function Profile({ isOpen, onClose }) {
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent display="flex" alignItems="center" justifyContent="center" >
          <ModalHeader w="55%" h="2%">
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody className="modal-body" mb="3%" w="50%" h="60%" bg="#FFFFFF">
            <Box align="center">
              <Image className="profile-image" mt="10px" boxSize="200px" src="./image/image.jpg" alt="my Image"></Image>
              <Text fontSize="15pt">JaeHyeok Jang</Text>
            </Box>
            <Box align="center">
              <Heading size="lg">My Skills</Heading>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center" mt="10px" className="profile-skils" align="center">
                <Text mr="5px" color="yellow">●</Text><Text mr="10px">JavaScript</Text>
                <Text mr="5px">●</Text><Text mr="10px">Vue.Js</Text>
                <Text mr="5px">●</Text><Text mr="10px">Asp.net</Text>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default Profile;
