import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Container>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h3" gutterBottom>
            About Us 
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
