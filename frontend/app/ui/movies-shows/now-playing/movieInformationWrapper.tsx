import React from "react";

const MovieInformationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="w-full h-[550px] rounded-lg">{children}</div>;
};

export default MovieInformationWrapper;
