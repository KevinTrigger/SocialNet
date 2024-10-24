import { lazy } from 'react';

export const ChatDetailsPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./ChatDetailsPage')), 1500);
}));