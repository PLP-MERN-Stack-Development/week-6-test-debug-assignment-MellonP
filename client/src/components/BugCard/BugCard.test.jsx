import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BugCard from './components/bugCard';

describe('BugCard Component', () => {
  const mockBug = {
    _id: '123',
    title: 'Test Bug',
    description: 'This is a test bug description',
    status: 'open',
    priority: 'medium',
    createdAt: '2023-01-01T00:00:00.000Z'
  };

  const mockHandlers = {
    onDelete: jest.fn(),
    onEdit: jest.fn()
  };

  it('renders bug information correctly', () => {
    render(
      <MemoryRouter>
        <BugCard bug={mockBug} />
      </MemoryRouter>
    );

    expect(screen.getByText('Test Bug')).toBeInTheDocument();
    expect(screen.getByText('This is a test bug description')).toBeInTheDocument();
    expect(screen.getByText('open')).toBeInTheDocument();
    expect(screen.getByText('medium')).toBeInTheDocument();
    expect(screen.getByText('1/1/2023')).toBeInTheDocument();
  });

  it('calls onEdit when edit button clicked', () => {
    render(
      <MemoryRouter>
        <BugCard bug={mockBug} {...mockHandlers} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(mockHandlers.onEdit).toHaveBeenCalled();
  });

  it('calls onDelete when delete button clicked', () => {
    render(
      <MemoryRouter>
        <BugCard bug={mockBug} {...mockHandlers} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Delete'));
    expect(mockHandlers.onDelete).toHaveBeenCalledWith('123');
  });
});