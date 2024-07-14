import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]); 
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items); 
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchData();
  }, [searchTerm]); 

  return (
    <Box p={2}  /* sx={{overflowY: 'auto', height: '90vh', flex:2}} */ minHeight='90vh'>
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos}  /*direction="row" wrap="wrap" */ /> 
    </Box>
  );
};

export default SearchFeed;
