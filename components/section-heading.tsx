import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h3 className="pb-8 text-3xl lg:text-6xl font-semibold">{children}</h3>
  );
}
