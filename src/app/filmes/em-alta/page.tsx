import Grid from '../../components/Grid';
import Title from '../../components/Title';
import { getNowPlaying } from '@/src/lib/api/tmdb';

export const dynamic = 'force-dynamic';

const FilmesEmAlta = async () => {
  const filmes = await getNowPlaying();

  return (
    <>
      <Title title="Filmes em Alta" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesEmAlta;
