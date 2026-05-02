import { getTopMovies } from '@/src/lib/api/tmdb';
import Title from '../../components/Title';
import Grid from '../../components/Grid';

export const dynamic = 'force-static';

const TopFilmes = async () => {
  const filmes = await getTopMovies();

  return (
    <>
      <Title title="Top Filmes" />
      <Grid filmes={filmes} />
    </>
  );
};

export default TopFilmes;
