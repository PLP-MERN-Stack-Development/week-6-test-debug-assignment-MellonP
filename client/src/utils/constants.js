export const BUG_STATUSES = {
  OPEN: 'open',
  IN_PROGRESS: 'in-progress',
  RESOLVED: 'resolved'
};

export const BUG_PRIORITIES = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

export const STATUS_OPTIONS = [
  { value: BUG_STATUS.OPEN, label: 'Open' },
  { value: BUG_STATUS.IN_PROGRESS, label: 'In Progress' },
  { value: BUG_STATUS.RESOLVED, label: 'Resolved' }
];

export const PRIORITY_OPTIONS = [
  { value: BUG_PRIORITY.LOW, label: 'Low' },
  { value: BUG_PRIORITY.MEDIUM, label: 'Medium' },
  { value: BUG_PRIORITY.HIGH, label: 'High' }
];