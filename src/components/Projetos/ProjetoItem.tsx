import { ProjetoContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

export default function ProjetoItem(){
    return (
        <ProjetoContainer imgUrl="https://avatars.githubusercontent.com/u/67250181?s=400&u=4750b82eaf738a93546dc67a2b5dfa67ea009a67&v=4">
            <section>
                <div className="overlay"></div>
                <div className="text">
                    <h1>
                        Projeto 01
                    </h1>
                    <h2>
                        - Website
                    </h2>
                </div>
            </section>
            <button type='button'>
                <Link href="/projeto">
                    <a>
                        Ver Mais <AiOutlineRightCircle />
                    </a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}