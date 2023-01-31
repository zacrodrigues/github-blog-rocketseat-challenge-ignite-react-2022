import { SearchInputContainer } from "./styles";

export function SearchInput() {
  return (
    <SearchInputContainer>
      <header>
        <h3>Publicações</h3>

        <p>6 publicações</p>
      </header>

      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}