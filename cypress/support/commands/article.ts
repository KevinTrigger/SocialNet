import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'БиологиЯ',
  img: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
  views: 412,
  createdAt: '21.02.2022',
  user: {
    id: '2',
    username: 'kevin',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png/200px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png'
  },
  type: [
    'SCIENCE',
  ],
  blocks: [],
};


export const createArticle = (article?: Article) => {
  return cy.request({
    method: "POST",
    url: "http://localhost:5000/articles",
    headers: { Authorization: 'randomtoken' },
    body: article ?? defaultArticle
  }).then((data) => data.body);
}

export const removeArticle = (articleId: string) => { 
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:5000/articles/${articleId}`,
    body: {},
    headers: {
      Authorization: 'randomtoken'
    }
  })
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      removeArticle(articleId: string): Chainable<void>;
      createArticle(article?: Article): Chainable<Article>;
    }
  }
}