import tmdbApi from "./axios";
import { getTrendingMovies } from "./tmdb";

jest.mock("./axios");

test("Retorna filmes em destaque corretamente", async()=> {
    //Teste AAA
    //Arrange: preparação do cenário.
    const mockResults = [{id: 1, title: "Matrix"}];
    (tmdbApi.get as jest.Mock).mockResolvedValue({
        data: {results: mockResults}
    });
    //Act: execução da ação.
    const filmes = await getTrendingMovies();
    //Assert: verificação do resultado.
    expect(filmes).toEqual(mockResults);
});
