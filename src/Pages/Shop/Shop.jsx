import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import MyCard from "../../Components/MyCard/Card";
import { defaultItems } from "./defaultItems";

function Shop() {
  const cardList = defaultItems.map((item) => {
    return <MyCard item={item} key={item.id} />;
  });

  return (
    <Container component="main">
      <Box>
        <Typography>Товары</Typography>
        <Container>{cardList}</Container>
      </Box>
   </Container>
  );
}

export default Shop;
