"use client";
import { Box, Container, Grid } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const {data:Session}=useSession()
  useEffect(() => {
    fetch("https://dummyapi.online/api/movies")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => setError(err));
  }, []);

  if (error) {
    return <div>Error loading products: {error.message}</div>;
  }

  return (
    <Container className="max-w-full">
    <div>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className=" mt-5 "
      >
        {products.map((item) => (
          <Grid item xs={6} key={item.id}>
            <Box border={1} padding={2} borderRadius={1}>
              <div>Movie: {item.movie}</div>
              <div>Rating: {item.rating}</div>
              <Link href={item.imdb_url}>Get Here</Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
    </Container>
  );
};

export default Page;
