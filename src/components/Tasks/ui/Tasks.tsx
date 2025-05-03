import { useEffect, useState } from 'react';
import ZipperIcon from '../../../assets/icons/zipper.svg?react';
import NotepadIcon from '../../../assets/icons/notepad.svg?react';
import { ItemType, BoardType, DragHandlerArgs, TaskProps } from '../types/index';
import { TaskCard } from '../../TaskCard';
import {
  BoardsWrapper,
  TaskList,
  TaskStatus,
  TaskListWrapper,
  TaskBtn,
  TaskStatusWrapper,
  Number,
  CountTask,
  CountTaskWrapper,
  CardsWrapper,
  CountNumber,
} from './Tasks.styled';
import { backGroundColorItem, ColorItems, taskListBcColor } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { updateTaskStatus, addNewTask } from '../../../features/tasks/tasksSlice';
import { ProgressBar } from '../../ProgressBar';

export const Cards = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dictionary = useSelector((state: RootState) => state.tasks.dictionary);
  const [boards, setBoards] = useState<BoardType[]>([
    {
      id: 1,
      boardIcon: <ZipperIcon />,
      title: dictionary.statuses[0],
      items: tasks.filter((num) => num.statusId === 0),
    },
    {
      id: 2,
      title: dictionary.statuses[1],
      boardIcon: <NotepadIcon />,
      items: tasks.filter((num) => num.statusId === 1),
    },
    {
      id: 3,
      title: dictionary.statuses[2],
      boardIcon: <NotepadIcon />,
      items: tasks.filter((num) => num.statusId === 2),
    },
  ]);

  const [currentBoard, setCurrentBoard] = useState<BoardType | null>(null);
  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);
  const [isCount, setCount] = useState<number>(
    Math.floor((boards[2].items.length / tasks.length) * 100),
  );

  const dragStartHandler = ({ board, item }: DragHandlerArgs) => {
    setCurrentBoard(board);
    setCurrentItem(item);
  };

  const dragHandler = ({ e, board, item }: DragHandlerArgs) => {
    if (!currentBoard || !currentItem) return;
    e?.stopPropagation();
    e?.preventDefault();
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const dropIndex = board.items.indexOf(item);
    board.items.splice(dropIndex, 0, currentItem);
    dispatch(updateTaskStatus({ taskName: currentItem.taskName, newStatusId: board.id - 1 }));
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  };

  const dragCardHandler = (board: BoardType) => {
    if (!currentBoard || !currentItem) return;
    board.items.push(currentItem);
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    dispatch(updateTaskStatus({ taskName: currentItem.taskName, newStatusId: board.id - 1 }));
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      }),
    );
  };

  const addTask = ({ taskTitle, asigId, statId }: TaskProps) => {
    dispatch(addNewTask({ taskTitle, asigId, statId }));
  };

  useEffect(() => {
    setBoards([
      {
        id: 1,
        boardIcon: <ZipperIcon />,
        title: dictionary.statuses[0],
        items: tasks.filter((num) => num.statusId === 0),
      },
      {
        id: 2,
        title: dictionary.statuses[1],
        boardIcon: <NotepadIcon />,
        items: tasks.filter((num) => num.statusId === 1),
      },
      {
        id: 3,
        title: dictionary.statuses[2],
        boardIcon: <NotepadIcon />,
        items: tasks.filter((num) => num.statusId === 2),
      },
    ]);
    setCount(Math.floor((boards[2].items.length / tasks.length) * 100));
  }, [tasks]);

  return (
    <CardsWrapper>
      <BoardsWrapper>
        {boards.map((board, index) => (
          <TaskListWrapper
            key={index}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dragCardHandler(board)}
          >
            <TaskStatusWrapper>
              <TaskStatus color={ColorItems[index]} backgroundColor={backGroundColorItem[index]}>
                {board.boardIcon} {board.title}
              </TaskStatus>
              <Number>{board.items.length}</Number>
            </TaskStatusWrapper>
            <TaskList backColor={taskListBcColor[index]}>
              {board.items.map((item) => (
                <TaskCard
                  key={item.id}
                  onDragOver={(e) => e.preventDefault()}
                  onDragStart={() => dragStartHandler({ board, item })}
                  onDrop={(e) => dragHandler({ e, board, item })}
                  draggable={true}
                  board={board}
                  item={item}
                  index={index}
                ></TaskCard>
              ))}
            </TaskList>
            <TaskBtn
              btnColor={ColorItems[index]}
              onClick={() => addTask({ taskTitle: 'Новая задача', asigId: 2, statId: index })}
            >
              <span>🞢</span> Новая задача
            </TaskBtn>
          </TaskListWrapper>
        ))}
      </BoardsWrapper>
      <CountTaskWrapper>
        <CountTask>
          <CountNumber>{isCount} % &nbsp;</CountNumber> выполненных задач
        </CountTask>
        <ProgressBar completed={isCount} />
      </CountTaskWrapper>
    </CardsWrapper>
  );
};
