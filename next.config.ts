import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public", // 서비스워커와 manifest가 public 폴더에 생성됨
  disable: process.env.NODE_ENV === "development", // 개발환경에서는 PWA 비활성화
});

const nextConfig: NextConfig = {
  /* config options here */
};

export default withPWA(nextConfig);