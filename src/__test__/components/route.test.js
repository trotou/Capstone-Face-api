import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import App from '../../App';

// jest.mock("../../Providers/User", () => {
//   return {
//     useProviderUser: () => ({
//       login: jest.fn(),
//     }),
//   };
// });

const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(ui, { wrapper: BrowserRouter });
};

// test("full app rendering/navigating", () => {
//   renderWithRouter(<App />);
//   expect(screen.getByText(/cadastre-se/i)).toBeInTheDocument();

//   const leftClick = { button: 0 };
//   userEvent.click(screen.getByText(/cadastre-se/i), leftClick);

//   expect(screen.getByText(/register/i)).toBeInTheDocument();
// });

test('landing on a bad page', () => {
    renderWithRouter(<App />, { route: '/sdfksdkfjsdf' });

    expect(screen.getByText(/error 404/i)).toBeInTheDocument();
});
