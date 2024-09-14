import Main from "@/components/main";
import React, { useEffect, useRef, useState } from "react";
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
import SparkMD5 from "spark-md5";
import {
  createLongVideoApi,
  createSegmentIdApi,
  getLongVideoListApi,
  uploadVideoApi,
} from "@/api/apis";
import { LongVideoListItem } from "@/api/type";
function Index() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [videoList, setVideoList] = useState<LongVideoListItem[]>([]);
  const [parameters, setParameters] = useState({
    font_size: 5,
    line_space: 1.5,
    y_align: 15,
    font_color: "#ffffff",
    border_color: "#ff0000",
    subtitle_font_size: 1.5,
    margin_v: 5,
    primary_colour: "&Hffffff",
    outline_colour: "&H100000000",
    back_colour: "&H80000000",
  });
  const [page] = useState(1);
  const [pageSize] = useState(100);
  // 需要监听状态的长视频
  const time = useRef<null | NodeJS.Timeout>(null);

  const getVideoList = async () => {
    const res = await getLongVideoListApi({ page, pageSize });
    if (res.code === 0) {
      setVideoList(res.data.list);
    }
  };
  const upDataList = () => {
    getVideoList();
  };

  // 创建长视频
  const CreateLongVideo = async () => {
    const res = await createLongVideoApi({
      ...parameters,
      title,
      cover_url: "",
      create_type: "",
      mainVideo: link,
      main_video_ratio: 0.2,
      segment_duration: 5,
      status: "",
    });
    if (res.code === 0) {
      getVideoList();
    }
  };
  // 上传视频
  const upLoadVideo = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/*";
    fileInput.onchange = async (
      e: React.ChangeEvent<HTMLInputElement> & { target: { files: File[] } }
    ) => {
      console.log(e);

      const file = e.target.files[0];
      const fileSize = file.size;
      const MaxSize = 1024 * 1024 * 32;
      // 获取视频时长
      const video_duration: number = await new Promise((resolve) => {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        video.onloadedmetadata = () => {
          resolve(video.duration);
        };
      });
      // 获取文件名称
      const fileName = file.name;
      // 小于32M 走直传接口
      if (fileSize < MaxSize) {
        const res = await uploadVideoApi({
          file,
          video_duration,
        });
        if (res.code === 0) {
          setLink(res.data.file.url);
        }
      } else {
        // 把文件按10M分割
        const fileChunkList = [];
        const chunkSize = 1024 * 1024 * 10;
        const chunks = Math.ceil(file.size / chunkSize);
        for (let i = 0; i < chunks; i++) {
          fileChunkList.push(file.slice(i * chunkSize, (i + 1) * chunkSize));
        }
        const fileMd5 = new SparkMD5.ArrayBuffer();
        const res = await createSegmentIdApi({
          fileName: fileName,
          fileMd5: fileMd5.end(),
          chunkTotal: fileChunkList.length,
          videoDuration: video_duration,
        });
        console.log(res);
      }
    };
    fileInput.click();
  };

  useEffect(() => {
    getVideoList();
  }, [page]);

  useEffect(() => {
    time.current = setInterval(() => {
      getVideoList();
    }, 10000);
    return () => {
      if (time.current) {
        clearInterval(time.current);
        time.current = null;
      }
    };
  }, []);
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
        <UpLoadButton icon={uploadIcon} onClick={upLoadVideo}>
          Upload
        </UpLoadButton>
        <CreateVideoButton
          onClick={() => {
            CreateLongVideo();
          }}
        >
          Get clips in 1 click
        </CreateVideoButton>
        <AdvancedParameters
          parameters={parameters}
          setParameters={setParameters}
        />
      </CreateVideoBox>
      <VideoList>
        {videoList.map((item, index) => (
          <VideoItem
            key={index}
            videoInfo={item}
            getList={() => {
              upDataList();
            }}
          />
        ))}
      </VideoList>
    </Main>
  );
}

export default Index;
