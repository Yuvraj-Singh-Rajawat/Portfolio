import React from "react";
import { Timeline } from "@/components/ui/timeline";
import "../../css/fonts.css";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TimelineDemo() {
  const data = [
    {
      title: "2022-2026",
      content: (
        <div className="flex flex-col gap-5">
          <h3 className="text-neutral-200 font-normal text-4xl">
            Jabalpur Engineering College
          </h3>
          <p className="ml-3">
            (Bachelor of Technology in{" "}
            <span className="font-medium text-[#4CC8B2]">
              Computer Science and Engineering
            </span>
            )
          </p>
          <Tabs defaultValue="third" className="w-[400px] ml-3">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="third">3rd Year</TabsTrigger>
              <TabsTrigger value="second">2nd Year</TabsTrigger>
              <TabsTrigger value="first">1st Year</TabsTrigger>
            </TabsList>

            <TabsContent value="third">
              <Card className="bg-[#7fb0a8] ring-1 ring-gray-300 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-black">3rd Year</CardTitle>
                  <CardDescription className="text-gray-900 font-medium">
                    Learned Important Topics Like
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { short: "AI", full: "Artificial Intelligence" },
                      { short: "DBMS", full: "Database Management Systems" },
                      { short: "TOC", full: "Theory of Computation" },
                    ].map((subject, index) => (
                      <div
                        className="bg-slate-300 flex items-center justify-center px-2 py-3 rounded-lg font-bold text-xl group relative"
                        key={index}
                      >
                        <p className="transition-all duration-300 ease-in-out text-black group-hover:text-sm group-hover:whitespace-pre-wrap group-hover:px-1 text-center">
                          {subject.short}
                        </p>
                        <p className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:bg-slate-400  group-hover:opacity-100 transition-all duration-300 ease-in-out text-xs text-center text-black rounded-md">
                          {subject.full}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="second">
              <Card className="bg-[#7fb0a8] ring-1 ring-gray-300 rounded-lg p-4">
                <CardHeader>
                  <CardTitle className="text-black">2nd Year</CardTitle>
                  <CardDescription className=" text-gray-900 font-medium">
                    Exploring the college with fun
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        short: "OOPS",
                        full: "Object-Oriented Programming System",
                      },
                      { short: "OS", full: "Operating System" },
                      { short: "DSA", full: "Data Structures and Algorithms" },
                      {
                        short: "COA",
                        full: "Computer Organization and Architecture",
                      },
                      { short: "DM", full: "Discrete Mathematics" },
                    ].map((subject, index) => (
                      <div
                        className="bg-slate-300 flex items-center justify-center px-2 py-3 rounded-lg font-bold text-xl group relative"
                        key={index}
                      >
                        <p className="transition-all duration-300 ease-in-out text-black group-hover:text-sm group-hover:whitespace-pre-wrap group-hover:px-1 text-center">
                          {subject.short}
                        </p>
                        <p className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out rounded-md group-hover:bg-slate-400  text-xs text-center  text-black">
                          {subject.full}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="first">
              <Card className="ring-1 ring-gray-300 rounded-lg p-4 bg-[#7fb0a8]">
                <CardHeader>
                  <CardTitle className="text-black">1st Year</CardTitle>
                  <CardDescription className="text-gray-900 font-medium">
                    Laying the foundation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { short: "C++", full: "Programming in C++" },
                      { short: "MATHS", full: "Mathematics" },
                    ].map((subject, index) => (
                      <div
                        className="bg-slate-300 flex items-center justify-center px-2 py-3 rounded-lg font-bold text-xl group relative"
                        key={index}
                      >
                        <p className="transition-all duration-300 ease-in-out text-black group-hover:text-sm group-hover:whitespace-pre-wrap group-hover:px-1 text-center">
                          {subject.short}
                        </p>
                        <p className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out text-black  rounded-md group-hover:bg-slate-400  text-xs text-center">
                          {subject.full}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <h3 className="text-neutral-200 font-normal text-4xl">
            Kendriya Vidyalaya No. 2 Gwalior
          </h3>
          <p
            className="ml-3 mt-3
          "
          >
            (12th Class)
          </p>
          <div className="mt-3 ml-3">
            <p className="text-neutral-300">
              Subject -{" "}
              <span className="text-[#4CC8B2] font-medium">
                Physics, Chemistry, Maths
              </span>
            </p>
            <p className="text-neutral-300">
              Percentage -{" "}
              <span className="text-[#4CC8B2] font-medium">93.4%</span>
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <h3 className="text-neutral-200 font-normal text-4xl">
            Kendriya Vidyalaya Shivpuri
          </h3>
          <p
            className="ml-3 mt-3
          "
          >
            (10th Class)
          </p>
          <div className="mt-3 ml-3">
            <p className="text-neutral-300">
              Percentage -{" "}
              <span className="text-[#4CC8B2] font-medium">90.8%</span>
            </p>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
