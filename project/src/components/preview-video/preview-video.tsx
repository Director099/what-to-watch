import {FC} from "react";

interface IPreviewVideo {
  prevVideo: string,
  poster?: string,
}

const styled: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

export const PreviewVideo: FC<IPreviewVideo> = ({prevVideo, poster}) => {
  return (
    <video src={prevVideo} poster={poster} muted style={styled} autoPlay={true} />
  );
};
