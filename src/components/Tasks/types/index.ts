export interface ItemType {
  id: string;
  taskName: string;
  assigneeId: number;
  statusId: number;
}

export interface BoardType {
  id: number;
  title: string;
  boardIcon: React.ReactNode;
  items: ItemType[];
}
export interface DragHandlerArgs {
  e?: React.DragEvent<HTMLDivElement>;
  board: BoardType;
  item: ItemType;
}
export interface TaskProps {
  taskTitle: string;
  asigId: number;
  statId: number;
};