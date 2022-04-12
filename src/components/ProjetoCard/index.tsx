import { ReactNode } from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface ProjetoCardProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
  
  
}

function ProjetoCard({ title, type, imgUrl, slug }: ProjetoCardProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projetos/${slug}`}>
        <a>
          <div className="overlay">
            <section>
              <h1>{title}</h1>
              <h2>{type}</h2>
            </ section>
          </div>
        </a>
      </Link>
      
    </Container>
  );
};

export default ProjetoCard;
