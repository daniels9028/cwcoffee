import React from "react";

import { news } from "../constants/index";

const News = () => {
  return (
    <div className="w-full bg-[#dedede] min-h-screen border-t-[1px] border-[#aaa] navbar">
      <div className="max-w-[1200px] mx-auto my-20">
        {news.map((item, index) => (
          <div
            className={`flex flex-col gap-4 mx-8 lg:pb-10 ${
              index % 2 === 0 ? "desktop:flex-row" : "desktop:flex-row-reverse"
            } lg:justify-center`}
            key={index}
          >
            <div
              className={`desktop:w-1/2 ${
                index % 2 === 0 ? "" : "desktop:-mt-[180px]"
              }`}
            >
              <div className="rounded-lg h-full bg-white px-8 py-4">
                <div className="h-20">
                  <h2 className="mb-2 text-[14px]">
                    <span className="font-semibold">ADMIN</span>{" "}
                    <span className="text-[#6c6c6c]">ON ARTICLE</span>
                  </h2>
                  <h3 className="font-semibold text-[16px]">{item.title}</h3>
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover h-[400px] w-full rounded-xl"
                />
                <div className="flex justify-between items-center mt-8">
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>

                    <span className="text-[12px] text-nowrap">
                      {new Date(item.date).toLocaleDateString("id-ID", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <span className="text-[12px] text-nowrap">
                    {new Date(item.date).toLocaleTimeString("id-ID", {
                      timeZone: "Asia/Jakarta",
                      timeZoneName: "short",
                    })}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex md:w-1/2 desktop:h-[400px] md:flex-row flex-col gap-4 lg:justify-center">
              {item.sub.map((sub, index) => (
                <div
                  className="rounded-lg h-full w-full bg-white px-8 py-4"
                  key={index}
                >
                  <div className="h-20">
                    <h2 className="mb-2 text-[14px]">
                      <span className="font-semibold">ADMIN</span>{" "}
                      <span className="text-[#6c6c6c]">ON ARTICLE</span>
                    </h2>
                    <h3 className="font-semibold text-[16px]">{sub.title}</h3>
                  </div>
                  <img
                    src={sub.img}
                    alt={sub.title}
                    className="object-cover h-[200px] w-[500px] rounded-xl"
                  />
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex gap-2 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>

                      <span className="text-[12px] text-nowrap">
                        {new Date(sub.date).toLocaleDateString("id-ID", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <span className="text-[12px] text-nowrap">
                      {new Date(sub.date).toLocaleTimeString("id-ID", {
                        timeZone: "Asia/Jakarta",
                        timeZoneName: "short",
                      })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
