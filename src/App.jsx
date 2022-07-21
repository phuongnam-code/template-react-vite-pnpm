import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '@/assets/css/App.scss';
import ErrorBoundaryPage from '@/pages/ErrorBoundaryPage';
import routes from '@/routes';
import { uuid } from '@/utils/commonFun';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<nav className='nav'>
					{routes.map((route) => {
						const { path, name, hidden } = route;
						return (
							!hidden && (
								<Link key={uuid()} to={path} style={{ padding: 5 }}>
									{name}
								</Link>
							)
						);
					})}
				</nav>
				<div className='wrapper'>
					<ErrorBoundaryPage>
						<Suspense fallback={<div>Loading...</div>}>
							<Routes>
								{routes.map((route) => {
									const { path, component: Component } = route;
									return <Route key={uuid()} path={path} element={<Component />} />;
								})}
							</Routes>
						</Suspense>
					</ErrorBoundaryPage>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
