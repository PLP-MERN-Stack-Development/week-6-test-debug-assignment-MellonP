import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BugProvider } from '../context/bugContext';

const AllTheProviders = ({ children }) => {
  return (
    <MemoryRouter>
      <BugProvider>
        {children}
      </BugProvider>
    </MemoryRouter>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };