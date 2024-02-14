import Head from "next/head";
import Footer from "../../components/footer";
import Header from "../../components/Header";
import StyledVideos from "./videos.style";

const VideosPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie videos</title>
      </Head>
      <Header />
      <StyledVideos>
        <div>
          <video
            src="https://www.maximekerlidou.fr/photos/clement/videos/video1.mp4"
            controls
          ></video>
          <video
            src="https://www.maximekerlidou.fr/photos/clement/videos/video3.mp4"
            controls
          ></video>
          <video
            src="https://www.maximekerlidou.fr/videos/bruyere.mp4"
            controls
          ></video>
          <video
            src="https://www.maximekerlidou.fr/videos/samin.mp4"
            controls
          ></video>
          <video
            src="https://www.maximekerlidou.fr/videos/edito.mp4"
            controls
          ></video>
        </div>
        <div style={{ marginTop: "20%" }}></div>
      </StyledVideos>
      <Footer />
    </>
  );
};
export default VideosPage;
