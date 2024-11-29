import React from "react";
import hostMap from "../../utils/hostMap";
import WujieReact from "wujie-react";
import { useNavigate, useLocation } from "react-router-dom";

const SubApp: React.FC = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const path = location.pathname
    .replace("/subApp", "")
    .replace("/vite", "")
    .replace("/", ""); ////
  const viteUrl = hostMap("//localhost:8000/") + path;
  interface Props {
    jump: (name: string) => void;
  }

  const props: Props = {
    jump: (name: string) => {
      navigation(`/${name}`);
    },
  };
  return (
    // 单例模式，name相同则复用一个无界实例，改变url则子应用重新渲染实例到对应路由
    <WujieReact
      width="100%"
      height="100%"
      name="vite"
      url={viteUrl}
      sync={!path}
      props={props}
    ></WujieReact>
  );
};

export default SubApp;
