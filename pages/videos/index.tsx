import Header from '../../components/Header';
import StyledVideos from './videos.style';

const VideosPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <StyledVideos>
        <div>
          <video
            src='https://www.maximekerlidou.fr/photos/clement/videos/video1.mp4'
            controls></video>
          <video
            src='https://www.maximekerlidou.fr/photos/clement/videos/video3.mp4'
            controls></video>
          <video
            src='https://www.maximekerlidou.fr/photos/clement/videos/video2.m4v'
            controls></video>
        </div>
      </StyledVideos>
    </>
  );
};
export default VideosPage;
