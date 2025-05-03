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
  
  export interface TaskCardProps { 
    board: BoardType; 
    item: ItemType;
    index: number;
    key: string;
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
    onDragStart: () => void;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
    draggable: boolean;
  }

  export interface NewAssignProps { 
    id: string; 
    newId: number;
  }

  export interface UpdateNameStoreProps { 
    index: number; 
    newName: string;
  }