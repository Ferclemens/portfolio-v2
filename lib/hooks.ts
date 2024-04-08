import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

export function useSectionInView(section: SectionName) {
  const { activeSection, setActiveSection, lastClickTime, setlastClickTime } =
    useActiveSectionContext();

  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView && Date.now() - lastClickTime > 500) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, lastClickTime]);
  return { ref };
}
