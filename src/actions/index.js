export const addTask = task => ({
  type: 'ADD_TASK',
  task
});

export const updateTask = task => ({
  type: 'UPDATE_TASK',
  task
});

export const deleteTask = task => ({
  type: 'DELETE_TASK',
  task
});

export const moveTask = (task, position) => ({
  type: 'MOVE_TASK',
  task,
  position
});
