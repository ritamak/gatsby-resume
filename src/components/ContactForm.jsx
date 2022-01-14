import React, { useRef } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const StyledButton = styled(Button)`
  background-color: #7664a8 !important;
`;

const ContactForm = () => {
  const form = useRef();

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
      return;
    }

    if (!isEmail(newMessage.email)) {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5">
            Let's talk!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            gutterBottom
          >
            <b>All field are required.</b>
          </Typography>
          <form ref={form} autoComplete="off" onSubmit={submitFormHandler}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="from_name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Message"
                  multiline
                  rows={4}
                  placeholder="Type your message here"
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                />
              </Grid>
              <Grid item xs={12}>
                <StyledButton type="submit" variant="contained" fullWidth>
                  Submit
                </StyledButton>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ContactForm;
