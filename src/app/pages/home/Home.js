import { Button, Grid, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import { FullHeightGrid } from "./HomeStyles";

function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [carouselData, setCarouselData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const dataFetched = fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(carouselData => carouselData)
      .catch(err => console.log(err.message));
    setCarouselData(dataFetched);
  }, []);

  return (
    <FullHeightGrid
      container 
      spacing={2} 
      alignItems="center" 
      justifyContent="center"
      direction="column"
    >
      <Grid item container alignItems="center" justifyContent="center">
        <Typography variant="h1">
          carousel
        </Typography>
      </Grid>
      <Grid item container alignItems="center" justifyContent="center">
        <Button onClick={() => setUserData({ loggedIn: false })}>Get me out of here</Button>
      </Grid>
    </FullHeightGrid>
  );
};

export default Home;