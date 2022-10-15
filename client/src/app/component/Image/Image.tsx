import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

// TODO: remove eslint-disable-next-line
// eslint-disable-next-line react/jsx-props-no-spreading
const Image: React.FC<ImageProps> = (props: ImageProps) => {return <img alt="" {...props} />;};

export default Image;
