import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

interface PostInterface {
  id: number;
  title: string;
  content: string;
  url: string;
}

@Component({
  selector: 'app-last-posts',
  imports: [NgFor],
  templateUrl: './last-posts.component.html',
  styleUrl: './last-posts.component.css',
})
export class LastPostsComponent {
  public posts: PostInterface[] = [
    {
      id: 1,
      title: '5 Dicas para uma Vida Financeira Equilibrada',
      content:
        'Descubra estratégias práticas para manter o equilíbrio financeiro. Aprenda a organizar suas despesas, criar uma reserva de emergência e investir no seu futuro com segurança.',
      url: 'https://blog.nubank.com.br/_next/image/?url=https%3A%2F%2Fbackend.blog.nubank.com.br%2Fwp-content%2Fuploads%2F2023%2F12%2Fvida-equilibrada-home.jpg%3Fq%3D80&w=384&q=75',
    },
    {
      id: 2,
      title: 'Como Ganhar Dinheiro Extra para Atingir Seus Objetivos',
      content:
        'Saiba como obter uma renda adicional e alcançar suas metas. Explore ideias de renda passiva, trabalhos freelancer e dicas práticas para complementar sua renda mensal.',
      url: 'https://blog.nubank.com.br/_next/image/?url=https%3A%2F%2Fbackend.blog.nubank.com.br%2Fwp-content%2Fuploads%2F2023%2F12%2Fdinheiro-extra-mobile.jpg%3Fq%3D80&w=384&q=75',
    },
    {
      id: 3,
      title: 'A Importância do Planejamento Financeiro em Casais',
      content:
        'Entenda como construir um planejamento financeiro com seu parceiro. Descubra como alinhar sonhos, criar objetivos em conjunto e fortalecer a relação através da educação financeira.',
      url: 'https://backend.blog.nubank.com.br/wp-content/uploads/2024/02/mulher-segurando-um-celular-e-abracando-um-homem.jpg?w=1080&q=80',
    },
  ];
}
