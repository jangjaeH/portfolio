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
          <ModalHeader w="50%" h="2%">
          <ModalCloseButton w="3%" h="3%" />
          </ModalHeader>
          <ModalBody w="50%" h="70%" bg="#FFFFFF">
            <Box align="center">
              <Image className="profile-image" mt="10px" boxSize="200px" src="./image/image.jpg" alt="my Image"></Image>
              <Text fontSize="15pt">JaeHyeok Jang</Text>
            </Box>
            <Box mt="10px" className="profile-skils" align="center">
                <Heading size="lg">My Skil</Heading>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}

export default Profile;
