import { useLocation } from "react-router";


//parsea toda busqueda y lo convierte en claves que nosotros podemos usar
//hook
export function useQuery(){
    return new URLSearchParams(useLocation().search);
}