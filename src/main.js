import React from "react";
import  MenuList  from "./data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "left" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "300px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{
                width:  "100%",
                height:"200px",
            }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
  );
};

export default Menu;
