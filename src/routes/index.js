import { lazy } from 'react';

const lazyLoadComponent = (path) => {
	return lazy(() => import(`../pages/${path}/index.jsx`));
};

const routes = [
	{
		path: '/',
		name: 'Home',
		hidden: false,
		component: lazyLoadComponent('HomePage'),
		child: [],
	},
	{
		path: '*',
		name: 'NotFoundPage',
		hidden: true,
		component: lazyLoadComponent('404Page'),
	},
];

export default routes;
