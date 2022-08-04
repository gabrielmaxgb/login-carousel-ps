import { Button, Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { UserContext } from "../../../App";
import { StyledGrid } from "./HomeStyles";

function Home() {
  const { userData, setUserData } = useContext(UserContext);
  const [carouselData, setCarouselData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  useEffect(() => {
    setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then(carouselData => {
        setCarouselData(carouselData);
        setLoading(false);
      })
      .catch(err => console.log(err.message));
  }, []);
  
  
  const carouselItems = () => {
    console.log("carouselData")
    console.log(carouselData.map(item => item.id));

    return carouselData.map(carouselItemData =>
      <div style={{ maxWidth: "100px" }}>
        <p>
          { carouselItemData.title }
        </p>
        <p>
          { carouselItemData.body }
        </p>
      </div>
    )
  };

  return loading ? (
    <div>loading</div>
  ) : (
    <>
      <Slider adaptiveHeight {...settings}>
        {carouselItems()}
      </Slider>
      <StyledGrid
        container 
        spacing={2} 
        alignItems="center" 
        justifyContent="center"
        direction="column"
      >
        <Grid item container alignItems="center" justifyContent="center">
          <Button onClick={() => setUserData({ loggedIn: false })}>Get me out of here</Button>
        </Grid>
      </StyledGrid>
    </>
  );
};

export default Home;