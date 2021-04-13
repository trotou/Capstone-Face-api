import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import App from '../../App';

jest.mock('../../providers/Services', () => {
    return {
        useServices: () => ({
            login: jest.fn()
        })
    };
});

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: BrowserRouter });
};

test('loading login route', () => {
    renderWithRouter(<App />, { route: '/login' });
    expect(screen.getByText(/Don’t have an account yet?/i)).toBeInTheDocument();
});

test('loading register route', () => {
    renderWithRouter(<App />, { route: '/register' });
    expect(screen.getByText(/Already have an account?/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
    renderWithRouter(<App />, { route: '/sdfksdkfjsdf' });

    expect(screen.getByText(/error 404/i)).toBeInTheDocument();
});
