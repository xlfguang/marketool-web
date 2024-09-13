import Main from "@/components/main";
import React, { useEffect, useState } from "react";
import {
  CreateVideoBox,
  CreateVideoButton,
  CreateVideoInput,
  CreateVideoInputBox,
  MainLogo,
  UpLoadButton,
  VideoList,
} from "./style";
import logo from "@/assets/images/AiMarketool.png";
import titleIcon from "@/assets/images/T-icon.png";
import lickIcon from "@/assets/images/Link-icon.png";
import uploadIcon from "@/assets/images/Upload-icon.png";
import VideoItem from "./components/videoItem";
import AdvancedParameters from "./components/parameters";
import { getLongVideoListApi } from "@/api/apis";
import { LongVideoListItem } from "@/api/type";
function Index() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [videoList, setVideoList] = useState<LongVideoListItem[]>([]);
  const [parameters, setParameters] = useState({
    titleFontSize: "5",
    titleLineHeight: "1.5",
    titleY: "15",
    titleColor: "#ffffff",
    titleBorderColor: "#ff0000",
    subtitleFontSize: "1.5",
    subtitleLineHeight: "5",
    subtitleColor: "&Hffffff",
    subtitleBorderColor: "&H100000000",
    subtitleBgColor: "&H80000000",
  });
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const getVideoList = async () => {
    const res = await getLongVideoListApi({ page, pageSize });
    console.log(res);
    if (res.code === 0) {
      setVideoList(res.data.list);
    }
  };
  useEffect(() => {
    getVideoList();
  }, [page]);
  return (
    <Main>
      <MainLogo src={logo} alt="logo" />
      <CreateVideoBox>
        <CreateVideoInputBox icon={titleIcon}>
          <CreateVideoInput
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CreateVideoInputBox>
        <CreateVideoInputBox icon={lickIcon}>
          <CreateVideoInput
            placeholder="Drop a link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </CreateVideoInputBox>
        <UpLoadButton icon={uploadIcon}>Upload</UpLoadButton>
        <CreateVideoButton>Get clips in 1 click</CreateVideoButton>
        <AdvancedParameters
          parameters={parameters}
          setParameters={setParameters}
        />
      </CreateVideoBox>
      <VideoList>
        {videoList.map((item, index) => (
          <VideoItem key={index} videoInfo={item} />
        ))}
      </VideoList>
    </Main>
  );
}

export default Index;
