import { Box, Container, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
    <Container component="main">
      <img src="./Images/404.png" height="300px" alt="404" />
      <Typography>
        Вы перейдете на Главную через {counter ? counter : navigate("/")}
      </Typography>
    </Container>
  );
}

export default NotFoundPage;
