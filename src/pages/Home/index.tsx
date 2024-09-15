import Main from "@/components/main";
import React, { useEffect, useRef, useState } from "react";
import {
  CreateVideoBox,
  CreateVideoButton,
  CreateVideoInput,
  CreateVideoInputBox,
  MainLogo,
  PaginationBox,
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
  deleteSegmentCacheApi,
  getLongVideoListApi,
  uploadSegmentApi,
  uploadSegmentCompleteApi,
  uploadVideoApi,
} from "@/api/apis";
import { LongVideoListItem } from "@/api/type";
import { NoData } from "../List/style";
import { Pagination, Spin, Toast } from "@douyinfe/semi-ui";
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
  const pageRef = useRef(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("loading...");
  // 需要监听状态的长视频
  const time = useRef<null | NodeJS.Timeout>(null);

  const getVideoList = async () => {
    const res = await getLongVideoListApi({
      page: pageRef.current,
      pageSize,
    });
    if (res.code === 0) {
      setVideoList(res.data.list);
      setTotal(res.data.total);
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

  const getMd5: (file: File | Blob) => Promise<string> = async (
    file: File | Blob
  ) => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const spark = new SparkMD5.ArrayBuffer();
        spark.append(e.target?.result as ArrayBuffer);
        resolve(spark.end());
      };
      fileReader.readAsArrayBuffer(file);
    });
  };
  const upLoadVideo = async () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "video/*";
    fileInput.onchange = async (event) => {
      const e = event as unknown as React.ChangeEvent<HTMLInputElement> & {
        target: { files: File[] };
      };
      setLoading(true);
      setLoadingText("Uploading...");
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

      // 如果文件小于32M，直接上传
      if (fileSize < MaxSize) {
        const res = await uploadVideoApi({
          file,
          video_duration,
        });
        if (res.code === 0) {
          setLink(res.data.file.url);
          setLoading(false);
        } else {
          Toast.error(res.msg);
        }
      } else {
        // 文件大于32M，按10M分割
        const fileChunkList: Blob[] = [];
        const chunkSize = 1024 * 1024 * 10;
        const chunks = Math.ceil(file.size / chunkSize);
        for (let i = 0; i < chunks; i++) {
          fileChunkList.push(file.slice(i * chunkSize, (i + 1) * chunkSize));
        }
        const fileMd5 = await getMd5(file);

        // 创建分片上传任务
        await createSegmentIdApi({
          fileName: fileName,
          fileMd5,
          chunkTotal: fileChunkList.length,
          videoDuration: video_duration,
        });

        // 以5个为一组进行并发上传
        const uploadChunksInBatch = async (startIndex: number) => {
          const batch = fileChunkList.slice(startIndex, startIndex + 5);
          const uploadPromises = batch.map(async (chunk, index) => {
            const uploadSegmentRes = await uploadSegmentApi({
              file: chunk,
              chunkNumber: startIndex + index,
              fileName: fileName,
              chunkTotal: fileChunkList.length,
              fileMd5,
              chunkMd5: await getMd5(chunk),
            });
            return uploadSegmentRes;
          });

          return Promise.all(uploadPromises);
        };

        // 批量上传所有分片
        for (let i = 0; i < fileChunkList.length; i += 5) {
          await uploadChunksInBatch(i);
        }
        // 上传完成获取文件地址
        const uploadSegmentCompleteApiRes = await uploadSegmentCompleteApi({
          fileName: fileName,
          fileMd5: await getMd5(file),
          videoDuration: video_duration,
        });
        const filePath = uploadSegmentCompleteApiRes.data.filePath;
        // 删除缓存
        await deleteSegmentCacheApi({
          fileMd5,
          filePath,
        });
        setLink(filePath);
        setLoading(false);
        Toast.success("上传完成");
      }
    };
    fileInput.click();
  };

  useEffect(() => {
    getVideoList();
  }, [pageRef.current]);

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
    <Spin tip={loadingText} spinning={loading}>
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

        {videoList.length ? (
          <>
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
          </>
        ) : (
          <NoData></NoData>
        )}
        <PaginationBox>
          <Pagination
            style={{
              margin: "20px auto",
            }}
            total={total}
            pageSize={pageSize}
            defaultCurrentPage={pageRef.current}
            onChange={(page) => {
              pageRef.current = page;
              upDataList();
            }}
          />
        </PaginationBox>
      </Main>
    </Spin>
  );
}

export default Index;
