import * as React from "react";
import { Container,Avatar, Grid, Card, CardContent, Typography , CardMedia,CardActionArea} from "@mui/material";
import Menu from "./main";
import TitlebarBelowImageList from "./exam";
import MenuList from "./data";
import { Box } from "@mui/material";
import { blue, green } from "@mui/material/colors";
const CardItem = () => {
  
  React.useEffect(()=>{
    setTimeout(()=>{
      console.log("hello");
    },500);
  });
  return (
    <div style={{
      height: "400px",
      background: "linear-gradient(105deg, #19224d 25%, #7988d2 25%)"
    }}>
      <Container style={{marginTop:'10px',height:'250px',width:'250px',backgroundColor: "white",padding:'0px'}}>
      {/* <Stack direction="column" spacing={1}> */}
        <Avatar style={{ zIndex:2 ,top: '25px',left:'100px',width:'50px',position:'relative'}}>BW</Avatar>
        <Card style={{paddingTop: '20px',backgroundColor: "white" ,zIndex:1}}>
          <CardContent>
            <Typography sx={{fontFamily:'cursive'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'fantasy'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'monospace'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'revert'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'sans-serif'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'serif'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'Roboto'}}> Network System S/W Team</Typography>
            <Typography sx={{fontFamily:'Roboto-sm'}}> Network System S/W Team</Typography>
          <ProgressCircle/>
          </CardContent>
        </Card>
      {/* </Stack> */}
      
    </Container>
    <Menu/>
    <TitlebarBelowImageList/>
    </div>
  );
};
export default CardItem;



const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(yellow 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, blue ${angle}deg 360deg),
            green`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
