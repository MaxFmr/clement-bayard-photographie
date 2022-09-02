import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Blank = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);
  return (
    <Head>
      <title>Clément Bayard - Photographe</title>
      <meta
        name='description'
        content='Clément Bayard, photographe et videaste à Valenciennes, photographie culinaire, portraits, mariages, street photography, vidéo montage, création de medias de communication photo, vidéos à Valenciennes et en France.'
      />
      <meta property='og:title' content='Clément Bayard photographe vidéaste' />
      <meta property='og:url' content='https://bayardclement.com/blank' />
      <meta property='og:type' content='website' />
    </Head>
  );
};
export default Blank;
