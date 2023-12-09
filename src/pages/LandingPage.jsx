import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {
  const query = useQuery();
  const search =query.get("search");
  
  //cuando pase 300ms se va hacer la busqueda de lo que haya en el input
  const debouncedSearch = useDebounce (search, 300);
  
  //cuando cambie el search el componente se va a volver a crear
  return (
    <div>
      <Search />
      <MoviesGrid key={search} search={debouncedSearch}/>
    </div>
  );
}