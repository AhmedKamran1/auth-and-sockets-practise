import React, { useRef, useEffect, useState } from "react";

import TermsAndConditions from "..";

// Styles
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { FlexContainer, Text } from "@/components/UI";
import * as Styles from "./terms-modal.styles";

// Icons
import CloseIcon from "@mui/icons-material/Close";

const TermsModal = ({ open, handleClose, onAccept }) => {
  const scrollRef = useRef(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    const handleScroll = () => {
      const { scrollHeight, clientHeight, scrollTop } = scrollRef.current;
      const isAtBottom = scrollHeight - scrollTop <= clientHeight + 1;
      setIsButtonDisabled(!isAtBottom);
    };

    scrollRef.current.addEventListener("scroll", handleScroll);
  }, [forceUpdate]);

  useEffect(() => {
    setForceUpdate(true);
  }, []);

  return (
    <Dialog open={open} handleClose={handleClose}>
      <DialogTitle sx={{ color: "text.secondary" }}>
        <FlexContainer flexDirection={"column"}>
          <Text variant="header" fontWeight={500} textAlign={"center"}>
            Terms of Service
          </Text>
        </FlexContainer>
        <Styles.CancelIcon onClick={handleClose}>
          <CloseIcon color="error" fontSize="large" />
        </Styles.CancelIcon>
      </DialogTitle>
      <DialogContent ref={scrollRef}>
        <DialogContentText id="alert-dialog-description">
          <TermsAndConditions />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Styles.AcceptButton disabled={isButtonDisabled} onClick={onAccept}>
          Accept
        </Styles.AcceptButton>
      </DialogActions>
    </Dialog>
  );
};

export default TermsModal;
