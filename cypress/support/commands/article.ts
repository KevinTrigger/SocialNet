import { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'TESTING ARTICLE',
  subtitle: 'БиологиЯ',
  img: 'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200',
  views: 412,
  createdAt: '21.02.2022',
  user: {
    id: '3',
    username: 'kevin',
    avatar: 'eggg.jpeg'
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