import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("search");
  
  //no es necesario
  //const [searchText, setSearchText] = useState("");
  //me va a permitir cambiar el historial a mi ruta, es decir, añadir un nuevo elemento a la ruta
  const history = useHistory();

    //no es necesario
    //si hay un cambio en el search se ejecuta
    /*
    useEffect(() => {
        setSearchText(search || "");
      }, [search]);
    */

  //con el siguiente codigo hago que se cancele lo que se hace por defecto en el formulario, hacer una petición al servidor
  const handleSubmit = (e) => {
    e.preventDefault();
    //history.push("/?search=" + searchText);
  };
  //FaSearch es un icono react icon
  //llamo a la funcion handleSubmit cuando se envia el formulario
  //onChange vamos hacer que lo que contenga el input se añada a la URL
  // el componente Search, al input ponerle value={search ?? ""} para que, si search está null o undefined, agarre "" por defecto,
  return (
<form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type="text"
          value={search ?? ""}
          autoFocus
          placeholder="Title"
          aria-label="Search Movies"
          onChange={(e) => {
            const value = e.target.value;
            history.push("/?search=" + value);
          }}
        />
        <FaSearch size={20} color="black" className={styles.searchButton} />
      </div>
    </form>
  );
}