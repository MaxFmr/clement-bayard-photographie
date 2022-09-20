import Head from 'next/head';
import Footer from '../../components/footer';
import Header from '../../components/Header';
import StyledVideos from './videos.style';

const VideosPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Clément Bayard Photographie videos</title>

        <meta
          name='google-site-verification'
          content='in-m5_OE0zu4tynnaNxglz5PwRysymFgWQwl2p-BwMI'
        />
        <meta name='description' content='Gallerie video par Clément Bayard' />
        <meta property='og:title' content='Clément Bayard video ' />

        <meta property='og:url' content='https://bayardclement.fr/videos' />
        <meta property='og:type' content='website' />
      </Head>
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
      <Footer />
    </>
  );
};
export default VideosPage;
