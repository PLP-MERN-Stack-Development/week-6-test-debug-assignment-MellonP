import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import BugList from '../../components/BugList';
import { MemoryRouter } from 'react-router-dom';

jest.mock('axios');

describe('BugList', () => {
  // ... (test cases remain the same as before)
});