import React, { useRef, useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
  Alert,
} from "@mui/material";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const StyledButton = styled(Button)`
  background-color: #7664a8 !important;
  font-family: "Prompt" !important;
`;

const StyledTypography = styled(Typography)`
  font-family: "Prompt" !important;
`;

const StyledTextField = styled(TextField)`
  font-family: "Prompt" !important;
`;

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const isNotEmpty = (value) => value.trim() !== "";
  const emailRgx = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const isEmail = (value) => value.match(emailRgx);

  const submitFormHandler = async (event) => {
    event.preventDefault();
    const { from_name, email, message } = event.target;
    let newMessage = {
      name: from_name.value,
      email: email.value,
      message: message.value,
    };
    if (
      !isNotEmpty(newMessage.name) ||
      !isNotEmpty(newMessage.email) ||
      !isNotEmpty(newMessage.message)
    ) {
      setFormInvalid(true);
      return;
    }

    if (!isEmail(newMessage.email)) {
      setEmailInvalid(true);
      return;
    }
    emailjs
      .sendForm(
        "service_7nh0wg4",
        "template_pgqz5hx",
        form.current,
        "user_2WOFOpOuYpLpCjLK5zGgj"
      )
      .then(
        (result) => {
          from_name.value = "";
          email.value = "";
          message.value = "";
          setMessageSent(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <Grid>
      <Card
        style={{
          backgroundColor: "#ebf8ff",
          maxWidth: 450,
          padding: "20px 5px",
          margin: "0 auto",
          borderRadius: "15px",
        }}
      >
        <CardContent>
          <StyledTypography gutterBottom variant="h5">
            Let's talk!
          </StyledTypography>
          <StyledTypography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            <b>All field are required.</b>
          </StyledTypography>
          <br></br>

          <form ref={form} autoComplete="off" onSubmit={submitFormHandler}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  placeholder="Enter name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  onChange={() => setFormInvalid(false)}
                  name="from_name"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  required
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  onChange={() => {
                    setFormInvalid(false);
                    setEmailInvalid(false);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  name="message"
                  onChange={() => setFormInvalid(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton type="submit" variant="contained" fullWidth>
                  submit
                </StyledButton>
              </Grid>
            </Grid>
          </form>
          {formInvalid && (
            <Alert
              severity="warning"
              style={{ marginTop: "20px", fontFamily: "Prompt" }}
            >
              All fields are required
            </Alert>
          )}
          {emailInvalid && (
            <Alert
              severity="warning"
              style={{ marginTop: "20px", fontFamily: "Prompt" }}
            >
              Invalid email format
            </Alert>
          )}
          {messageSent && (
            <Alert style={{ marginTop: "20px", fontFamily: "Prompt" }}>
              Your message was sent!
            </Alert>
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContactForm;
