import Main from "@/components/main";
import { useState } from "react";
import VideoItem from "./components/videoItem";
import { VideoList } from "./style";

function Index() {
  const [videoList, setVideoList] = useState(["1"]);
  return (
    <Main>
      <VideoList>
        {videoList.map((video, i) => {
          return <VideoItem video={video} key={i} />;
        })}
      </VideoList>
    </Main>
  );
}

export default Index;
