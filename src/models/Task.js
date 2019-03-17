import uniqueId from 'lodash/uniqueId';

export const TaskStatus = Object.freeze({
  PENDING: 'pending',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed'
});

export const TaskPriority = Object.freeze({
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low'
});

export default class Task {
  /**
   * Copies a task
   * @param {Task} task instance of a task
   * @param {boolean} shouldCopyId copy task id also or not
   */
  static from(task, shouldCopyId = false) {
    const t = new Task(task.title, task.description, task.priority, task.tags);
    if (shouldCopyId) {
      t.id = task.id;
      t.progress = +task.progress;
      t.createdAt = task.createdAt;
      t.status = task.status;
    }
    return t;
  }

  /**
   * Parses priority
   * @param {string} priority task priority
   * @returns {('not_started'|'in_progress'|'completed')}
   */
  static parsePriority(priority) {
    switch (priority) {
      case TaskPriority.HIGH:
        return TaskPriority.HIGH;
      case TaskPriority.LOW:
        return TaskPriority.LOW;
      default:
        return TaskPriority.MEDIUM;
    }
  }

  /**
   * Creates a task
   * @param {string} title task title
   * @param {string} description task description
   * @param {('not_started'|'in_progress'|'completed')} priority priority of the task
   * @param {string[]} tags to group tasks
   */
  constructor(title, description, priority, tags) {
    this.id = uniqueId('task-');
    this.title = title;
    this.description = description;
    this.progress = 0;
    this.priority = Task.parsePriority(priority);
    this.tags = tags instanceof Array ? tags : ['todo'];
    this.status = TaskStatus.PENDING;
    this.createdAt = new Date();
  }

  /**
   * Starts the task progress
   */
  startProgress() {
    this.status = TaskStatus.IN_PROGRESS;
    return this;
  }

  /**
   * Sets the progress of a task
   * @param {number} value progress in percentage
   */
  setProgress(value) {
    if (value > 100 || value < 0) {
      throw new Error('Invalid progress value');
    } else if (value === 100) {
      return this.markAsDone();
    }
    this.status = TaskStatus.IN_PROGRESS;
    this.progress = value;
    return this;
  }

  /**
   * Sets tasks status as complete
   */
  markAsDone() {
    this.status = TaskStatus.COMPLETED;
    this.progress = 100;
    return this;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      tags: this.tags,
      progress: this.progress,
      priority: this.priority,
      status: this.status,
      createdAt: this.createdAt.toLocaleString('en-IN', {
        hour12: true,
        month: 'long',
        year: 'numeric',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
  }
}
