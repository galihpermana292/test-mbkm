import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

export const currentRoutes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);
