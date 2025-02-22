import Tema from './Tema'

interface Postagem {
    id: number;
    titulo: string;
    texto: string;
    foto: string;
    data: string;
    tema?: Tema | null
}

export default Postagem;