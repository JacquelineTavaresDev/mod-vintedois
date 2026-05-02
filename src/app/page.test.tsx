//Extensão do Jest DOM: adiciona matchers como "toBeInTheDocument"
import "@testing-library/jest-dom";
//Importa a função que será mockada
import { getTrendingMovies } from "./../lib/api/tmdb";

import { render, screen } from "@testing-library/react";
import Home from "./page";

jest.mock("./../lib/api/tmdb", () => ({
    getTrendingMovies: jest.fn(), //retorna um mock dessa função.
}));

test("Exibe o titulo 'Filmes em destaque' na página inicial corretamente", async () => {
    const titulo = "Filmes em destaque";

    render(await Home());

    //Verifica se o título da seção aparece corretamente.
    expect(screen.getByText(titulo)).toBeInTheDocument();
});


test("Renderiza os filmes em destaque corretamente", async() => {

    (getTrendingMovies as jest.Mock).mockResolvedValue([
        {
            id: 1,
            title: "Filme teste",
            overview: "Resumo teste",
            poster_path: "public/next.svg",
            vote_average: 8.0
        }
    ]);

    //Renderiza a página (internamente chama a função getTrendingMovies).
    render(await Home());
    //Verificar se o título renderizado aparece na tela.
    expect(await screen.findByText("Filme teste")).toBeInTheDocument();
});

test("Exibir uma mensagem quando não houver filmes disponíveis", async()=> {
    (getTrendingMovies as jest.Mock).mockResolvedValue([]);

    //Renderiza a página (internamente chama a função getTrendingMovies).
    render(await Home());

    expect(screen.getByText("Nenhum filme encontrado.")).toBeInTheDocument();
});
