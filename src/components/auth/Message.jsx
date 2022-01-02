import { Snackbar } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MuiAlert from '@material-ui/lab/Alert';
import { LinkedInState } from '../../context/Context';

const Message = () => {

  const { errorMessage, setErrorMessage } = LinkedInState();

  const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
          return;
    }

    setErrorMessage({open : false});
  };

  return (
    <MassageHandler>
      <Snackbar open={errorMessage.open} autoHideDuration={2000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity={errorMessage.type}>
          {errorMessage.message}
        </MuiAlert>
      </Snackbar>
    </MassageHandler>
  );
}

export default Message

const MassageHandler = styled.div`
    .error{
        font-size: 0.7rem;
        color : red;
        text-transform: capitalize;
        display  :flex;
        align-items: center;
    }
`