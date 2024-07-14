import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults= async() => {
       const data= await fetchFromAPI(`channels?part=snippet&id=${id}`)
       setChannelDetail(data?.items[0]); 

       const videosData= await fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        setVideos(videosData?.items);
    }
    fetchResults();
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <Box
          sx={{
            height: '160px',
            background: 'linear-gradient(90deg, rgba(70,1,1,1) 4%, rgba(10,10,10,0.7176120448179272) 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box  display='flex'  p={2} position={"relative"}>
        <Typography variant="h4" fontWeight="bold" color="#fff" mb={2} position={"relative"}>
          {channelDetail?.snippet?.title} Videos
        </Typography>
        <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
