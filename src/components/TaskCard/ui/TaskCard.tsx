import {
  Task,
  TaskTitleWrapper,
  TaskTitle,
  ButtonTrash,
  TaskAuthor,
  TaskAuthorMenu,
  TaskStatus,
  CheckIcon,
} from './TaskCard.styled';
import { TaskCardProps, NewAssignProps, UpdateNameStoreProps } from '../type';
import { useState, FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useDispatch } from 'react-redux';

import Trash from '../../../assets/icons/trash.svg?react';
import Check from '../../../assets/icons/check.svg?react';
import { ColorItems, backGroundColorItem } from '../constants';
import { removeTask, updateTaskName, addNewAuthor } from '../../../features/tasks/tasksSlice';

export const TaskCard: FC<TaskCardProps> = ({
  board,
  item,
  index,
  onDragOver,
  onDragStart,
  onDrop,
  ...props
}) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dictionary = useSelector((state: RootState) => state.tasks.dictionary);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const addNewAssig = ({ id, newId }: NewAssignProps) => {
    dispatch(addNewAuthor({ id: id, newAuthor: newId }));
  };
  const updateNameStore = ({ index, newName }: UpdateNameStoreProps) => {
    dispatch(updateTaskName({ index: index, newTaskName: newName }));
  };
  const toggleMenu = (id: string) => {
    setActiveMenu((prev) => (prev === id ? null : id));
  };
  const click = (index: number) => {
    dispatch(removeTask(index));
  };

  return (
    <Task
      color={backGroundColorItem[index]}
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDrop={onDrop}
      {...props}
    >
      <TaskTitleWrapper>
        <CheckIcon>
          <Check />
        </CheckIcon>
        <TaskTitle
          defaultValue={item.taskName}
          onBlur={(e) => updateNameStore({ index: tasks.indexOf(item), newName: e.target.value })}
        />
        <ButtonTrash
          onClick={() => {
            click(tasks.indexOf(item));
          }}
        >
          <Trash />
        </ButtonTrash>
      </TaskTitleWrapper>
      <TaskAuthor onClick={() => toggleMenu(item.id)}>
        {dictionary.assignees[item.assigneeId]}
        {activeMenu === item.id ? (
          <TaskAuthorMenu>
            {Object.values(dictionary.assignees).map((str, i) => (
              <span key={i} onClick={() => addNewAssig({ id: item.id, newId: i + 1 })}>
                {str}
              </span>
            ))}
          </TaskAuthorMenu>
        ) : null}
      </TaskAuthor>
      <TaskStatus color={ColorItems[index]} backgroundColor={backGroundColorItem[index]}>
        {board.boardIcon} {dictionary.statuses[item.statusId]}
      </TaskStatus>
    </Task>
  );
};
