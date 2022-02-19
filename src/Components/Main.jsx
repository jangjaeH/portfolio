import React from "react";
import {
  AspectRatio,
  Box,
  Button,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { project } from "./Project";
import Profile from "./Profile";

import "./Main.scss";
function Main(props) {
  const {
    isOpen: profileModalVisibility,
    onOpen: openProfileModal,
    onClose: closeProfileModal,
  } = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onProjectClick = () => {
    console.log("1");
  };
  const onUserClick = () => {
    openProfileModal();
    console.log("!!!!");
  };

  return (
    <div className="chaild-main">
      <div className="main-content">
        <div className="main-items">
          <div>
            <FontAwesomeIcon
              className="main-project"
              onClick={onProjectClick}
              color="#00AAFF"
              fontSize="100px"
              icon={["fas", "folder"]}
            />
            <Box m="10px" align="center">
              project
            </Box>
          </div>
          <div>
            <FontAwesomeIcon
              className="main-user"
              onClick={onUserClick}
              color="#FFFFFF"
              fontSize="100px"
              icon={["fas", "user"]}
            />
            <Box m="10px" align="center">
              about
            </Box>
          </div>
          <Profile
            isOpen={profileModalVisibility}
            onClose={closeProfileModal}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
