import React from 'react';
import { render } from '@testing-library/react';
import BugCard from '../../components/BugCard';

describe('BugCard', () => {
  it('renders bug information correctly', () => {
    const bug = {
      _id: '1',
      title: 'Test Bug',
      description: 'Test Description',
      status: 'open',
      priority: 'medium',
      createdAt: '2023-01-01'
    };
    
    const { getByText } = render(
      <BugCard bug={bug} onDelete={() => {}} onEdit={() => {}} />
    );
    
    expect(getByText('Test Bug')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText('open')).toBeInTheDocument();
  });
});