import React from "react";
import { TextField, Button } from '@mui/material';

const ContactPage = () => {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
      <p>
        You can also email us directly at{" "}
        <a href="mailto:developer@example.com">developer@example.com</a>
      </p>
    </>
  );
};

export default ContactPage;
