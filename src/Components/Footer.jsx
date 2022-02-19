import React, { useEffect, useState } from "react";
import { AspectRatio, Box } from "@chakra-ui/react";
import moment from "moment";
import "./Footer.scss";
function Footer(props) {
  let timer = null;
  const [time, setTime] = useState(moment());
  useEffect(() => {
    timer = setInterval(() => {
      setTime(moment());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="child-footer">
      <Box className="footer-timer" w="100%" h="100%" align="right">
        <Box
          bg="linear-gradient(135deg, #adc1ee 0%,#f8c5ec 100%)"
          w="5%"
          h="100%"
          pt="2px"
          fontSize="14pt"
          align="center"
          border="solid 1px linear-gradient(135deg, #f3e7e8 0%,#e3eeff 100%)"
          borderRadius="10px"
        >
          {time.format("HH:mm:ss")}
        </Box>
      </Box>
    </div>
  );
}

export default Footer;
