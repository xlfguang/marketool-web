import React, { useState } from "react";
import styled from "styled-components";

interface Parameters {
  font_size: number;
  line_space: number;
  y_align: number;
  font_color: string;
  border_color: string;
  subtitle_font_size: number;
  margin_v: number;
  primary_colour: string;
  outline_colour: string;
  back_colour: string;
}
interface ParametersProps {
  parameters: Parameters;
  setParameters: (parameters: Parameters) => void;
}
const Text = styled.div`
  color: #ff5334;
  cursor: pointer;
`;
const Box = styled.div`
  position: relative;
`;
const Cover = styled.div`
  width: 100vw;
  height: 100vh;
  background: #00000070;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;
const ParametersForm = styled.div`
  position: absolute;
  background: #fff;
  width: 1008px;
  max-width: 1008px;
  border-radius: 10px;
  padding: 24px;
  z-index: 3;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-wrap: wrap;
  gap: 40px 78px;
  @media (max-width: 1008px) {
    width: calc(100vw - 40px);
    padding: 12px;
    gap: 20px 20px;
  }
`;
const ParametersInputBox = styled.div`
  width: 268px;
  @media (max-width: 1008px) {
    width: calc(50% - 20px);
  }
`;
const ParametersInputTitle = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #130808;
`;
const MyInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 7px;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
`;
const ParametersInput = (props: {
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <ParametersInputBox>
      <ParametersInputTitle>{props.title}</ParametersInputTitle>
      <MyInput type="text" value={props.value} onChange={props.onChange} />
    </ParametersInputBox>
  );
};
function AdvancedParameters(props: ParametersProps) {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Text
        onClick={() => {
          setShow(true);
        }}
      >
        高级参数
      </Text>
      {show && (
        <ParametersForm>
          <ParametersInput
            title="标题字体大小"
            value={String(props.parameters.font_size)}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                font_size: Number(e.target.value),
              });
            }}
          />
          <ParametersInput
            title="标题行高"
            value={String(props.parameters.line_space)}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                line_space: Number(e.target.value),
              });
            }}
          />
          <ParametersInput
            title="标题Y轴间距"
            value={String(props.parameters.y_align)}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                y_align: Number(e.target.value),
              });
            }}
          />
          <ParametersInput
            title="标题字体颜色"
            value={props.parameters.font_color}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                font_color: e.target.value,
              });
            }}
          />
          <ParametersInput
            title="标题边框颜色"
            value={props.parameters.border_color}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                border_color: e.target.value,
              });
            }}
          />
          <ParametersInput
            title="字幕字体大小"
            value={String(props.parameters.subtitle_font_size)}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                subtitle_font_size: Number(e.target.value),
              });
            }}
          />
          <ParametersInput
            title="字幕间距"
            value={String(props.parameters.margin_v)}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                margin_v: Number(e.target.value),
              });
            }}
          />
          <ParametersInput
            title="字幕字体主题色"
            value={props.parameters.primary_colour}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                primary_colour: e.target.value,
              });
            }}
          />
          <ParametersInput
            title="字幕字体边框颜色"
            value={props.parameters.outline_colour}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                outline_colour: e.target.value,
              });
            }}
          />
          <ParametersInput
            title="字幕字体背景颜色"
            value={props.parameters.back_colour}
            onChange={(e) => {
              props.setParameters({
                ...props.parameters,
                back_colour: e.target.value,
              });
            }}
          />
        </ParametersForm>
      )}
      {show && (
        <Cover
          onClick={() => {
            setShow(false);
          }}
        ></Cover>
      )}
    </Box>
  );
}

export default AdvancedParameters;
