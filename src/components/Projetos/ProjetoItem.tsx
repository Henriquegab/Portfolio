import { ProjetoContainer } from './styles';
import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

interface ProjetoProps{
    title: string;
    type: string;
    slug: string;
    img: string;
}

export default function ProjetoItem({title, type, slug, img}: ProjetoProps){
    return (
        <ProjetoContainer imgUrl={img}>
            <section>
                <div className="overlay"></div>
                <div className="text">
                    <h1>
                        # {title}
                    </h1>
                    <h2>
                        - {type}
                    </h2>
                </div>
            </section>
            <button type='button'>
                <Link href={`/projetos/${slug}`}>
                    <a>
                        Ver Mais <AiOutlineRightCircle />
                    </a>
                </Link>
            </button>
        </ProjetoContainer>
    )
}