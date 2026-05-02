import { getPopularMovies } from '@/src/lib/api/tmdb';
import Title from '../../components/Title';
import Grid from '../../components/Grid';

export const revalidate = 60; //atualiza a cada 60s.

const FilmesPopulares = async () => {
  const filmes = await getPopularMovies();

  return (
    <>
      <Title title="Filmes Populares" />
      <Grid filmes={filmes} />
    </>
  );
};

export default FilmesPopulares;
