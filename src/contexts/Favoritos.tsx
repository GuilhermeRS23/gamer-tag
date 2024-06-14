import { ReactElement, createContext, useContext, useState } from "react";

interface Favorito {
    id: number
    titulo?: string
    capa?: string
}

interface FavoritosContextType {
    favorito: Favorito[]
    setFavorito: React.Dispatch<React.SetStateAction<Favorito[]>>
}

export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }: { children: ReactElement | string }) {
    const [favorito, setFavorito] = useState<Favorito[]>([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
};

export function useFavoritoContext() {
    const context = useContext(FavoritosContext);
  
  if (!context) {
    throw new Error("useFavoritoContext must be used within a FavoritosProvider");
  }

    const { favorito, setFavorito } = context;

    function adicionarFavorito(novoFavorito: Favorito) {
        const favoritoRepetido = favorito.some(item => item.id === novoFavorito.id);
        let novaLista = [...favorito];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }
    return {
        favorito,
        adicionarFavorito
    }
}
