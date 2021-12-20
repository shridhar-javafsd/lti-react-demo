// import App from './App';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Dept from './components/Dept';
import store from './redux/store';
import AppUserComp from './components/AppUserComp';
// syntax test('', () => {})

test('test dept component', () => {
  render(
    <Provider store={store}>
      <Dept />
    </Provider>
  );
  const dataFromDept = screen.getByText('Dept1 Component');
  expect(dataFromDept).toBeInTheDocument();
});

test('test AppUser component', () => {
  render(
    <Provider store={store}>
      <AppUserComp />
    </Provider>
  );
  const dataFromDept = screen.getByText('get App User by id:');
  expect(dataFromDept).toBeInTheDocument();
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
