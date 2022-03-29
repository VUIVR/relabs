import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";

function MyCard({ item }) {
  //отображает цену добавляя пробелы
  function prettifly(num) {
    const n = num.toString();
    const separator = " ";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
  }

  //звездный рейтинг
  const raiting = ["☆", "☆", "☆", "☆", "☆"];
  for (let i = 0; i < Math.round(item.raiting); i++) {
    raiting[i] = "★";
  }

  return (
    <Card sx={{ maxWidth: 160 }}>
      <CardMedia
        component="img"
        height="200"
        image={item.img}
        alt={item.model}
      />
      <Typography
        gutterBottom
        variant="subtitle2"
        component="div"
        sx={{
          position: "relative",
          top: "-15px",
          bgcolor: " inherit",
          width: "fit-content",
          p: "3px 7px",
          borderRadius: "10px",
        }}
      >
        -{item.discount}%
      </Typography>
      <CardContent>
        <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
          {prettifly(item.totalPrice())} ₽{" "}
          <Typography
            variant="body2"
            component="span"
            sx={{ textDecoration: "line-through" }}
          >
            {prettifly(item.price)} ₽
          </Typography>
        </Typography>
        <Typography variant="body2" component="div">
          {item.brand} / {item.model} {item.memory}Gb / {item.display}"
        </Typography>
        <Typography variant="body1" component="div">
          <Rating name="read-only" value={item.raiting} readOnly />
        </Typography>
        <Typography variant="body2" component="div">
          {item.creditProd}
        </Typography>
        <Typography>
          <Button variant="outlined" size="small">
            В корзину
          </Button>{" "}
          <Typography variant="h6" component="span">
            ♡
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MyCard;
