"use client";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function Home() {
  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container className="w-full">
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Typography variant="h1" gutterBottom>
              Welcome to the Home Page
            </Typography>
            <Typography variant="body1" paragraph>
              This is the starting point of our amazing app. Here you can find
              information about our features and how to get started.
            </Typography>
            <Typography variant="h2" gutterBottom>
              Features
            </Typography>
            <Typography variant="body1" paragraph>
              - Feature 1: Description of the first feature.
            </Typography>
            <Typography variant="body1" paragraph>
              - Feature 2: Description of the second feature.
            </Typography>
            <Typography variant="body1" paragraph>
              - Feature 3: Description of the third feature.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
