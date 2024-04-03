"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-40 mx-7 my-32 sm:mx-10">
      <SectionHeading>Experience</SectionHeading>
      <div>
        <VerticalTimeline layout={"2-columns"} animate={true} lineColor={""}>
          {experiencesData.map((data, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background: "#f3f4f6",
                }}
                contentArrowStyle={{
                  borderRight: "0.6rem solid #21414d",
                }}
                date={data.date}
                icon={data.icon}
                iconStyle={{
                  background: "#f3f4f6",
                }}
              >
                <h3>{data.title}</h3>
                <p>{data.location}</p>
                <p>{data.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
