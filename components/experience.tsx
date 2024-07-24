"use client";
import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experiencia");
  const { theme } = useTheme();
  return (
    <section
      ref={ref}
      id="experience"
      className="scroll-mt-40 lg:scroll-mt-40 sm:scroll-mt-24 mx-7 my-32 sm:mx-10 text-gray-750 dark:text-gray-200"
    >
      <SectionHeading>Experiencia</SectionHeading>
      <div>
        <VerticalTimeline layout={"2-columns"} animate={true} lineColor={""}>
          {experiencesData.map((data, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.15)",
                }}
                contentArrowStyle={{
                  borderRight: "0.6rem solid #21414d",
                }}
                date={data.date}
                icon={data.icon}
                iconStyle={{
                  background:
                    theme === "light" ? "#f3f4f6" : "rgba(55, 73, 95)",
                }}
              >
                <h3>{data.title}</h3>
                <p>{data.description}</p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}
