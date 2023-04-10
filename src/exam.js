import * as React from 'react';
import  MenuList  from "./data";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function TitlebarBelowImageList() {
  return (
    <ImageList sx={{ alignContent:"right", justifyContent:"left",display: "flex", flexWrap: "wrap"}} >
      {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "250px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{
                width:  "100%",
                height:"100px",
                objectFit:"fill"
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
    </ImageList>
  );
}
