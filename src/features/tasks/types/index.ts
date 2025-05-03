export interface TaskType {
  id: string;
  taskName: string;
  assigneeId: number;
  statusId: number;
}

export interface DictionaryType {
  assignees: { [key: string]: string };
  statuses: { [key: string]: string };
}