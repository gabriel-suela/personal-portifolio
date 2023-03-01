export type PortifolioProps ={
    title: string,
    imgUrl: string,
    stack: string[],
    link: string
}

export const portifolio = [
    {
      title: 'Future Eats',
      imgUrl: '/assets/future-eats.jpeg',
      stack: ['React', 'Styled-Components', 'Axios', 'Material-UI'],
      link: 'https://github.com/gabriel-suela/future-eats',
    },
    {
      title: 'LabeX',
      imgUrl: '/assets/LabeX.png',
      stack: ['React', 'Styled-Components', 'Axios'],
      link: 'https://github.com/gabriel-suela/labe-x',
    },
    {
      title: 'Kanban App',
      imgUrl: '/assets/kanban.jpeg',
      stack: ['React', 'Typescript', 'Drag and Drop', 'Chakra-UI'],
      link: 'https://github.com/gabriel-suela/kanban-app',
    },
  ]
  