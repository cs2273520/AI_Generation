import axios from "./axios_init";

// 文案文本
export const LongTextDigest = (data) => {
  console.log("请求参数", data);
  return axios.request({
    url: "/gpt/LongTextDigest",
    method: "post",
    data: data,
  });
};
