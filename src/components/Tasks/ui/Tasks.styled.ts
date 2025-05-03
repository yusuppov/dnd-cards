import styled from 'styled-components'

export const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    flex-direction: column;
    gap: 30px;
`

export const Number = styled.div`
    color: rgba(105, 105, 105, 1);
    font-size: 13px;
`
export const BoardsWrapper = styled.div`
    display: grid;
    width: 98vw;
    column-gap: 16px;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    max-width: 1440px;
`
export const TaskStatus = styled.div<{backgroundColor: string, color: string}>`
    display: inline-flex;
    align-items: center;
    width: max-content;
    padding: 4px 12px;
    border-radius: 9999px;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    font-size: 13px;
    font-weight: 500;
    svg {
        margin-right: 4px;
    }
`
export const Task = styled.div`
    border: 1px solid #BBDDD6;
    color: black;
    width: 100%;
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
`
export const TaskList = styled.div<{backColor: string}>`
    display: flex;
    max-height: 83vh;
    overflow-y:scroll;
    gap: 12px;
    border-radius: 20px;
    flex-direction: column;
    padding: 12px;
    background-color: ${(props) => props.backColor};
    &::-webkit-scrollbar {
    width: 6px;
    position: absolute;
    } 
    &::-webkit-scrollbar-track {
    background: transparent;
    }
    &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }
`
export const TaskListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const TaskTitle = styled.input`
    font-weight: 600;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color:black;
    width: 90%;
    &:focus {
    outline: none;
    border-color: #007bff;
  }
`
export const TaskAuthor = styled.h2`
    font-size: 12px;
    font-weight: 400;
    position: relative;
`

export const TaskAuthorMenu = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
    position: absolute;
    top:22px;
    z-index: 9;
    span { 
        font-size: 14px;
        padding: 16px;
    }
`

export const TaskStage = styled.span`
    font-size: 12px;
    border-color: #0B6F62;
`
export const ButtonTrash = styled.button`
    background-color: white;
    border: none;
    box-shadow: none;
    &:hover {
        cursor: pointer;
        svg {
            color: black;
        }
    }
    svg {
        color: rgba(200, 42, 25, 1);
    }
`
export const TaskTitleWrapper = styled.div`
    display: inline-flex;
    justify-content: space-between;
    width: 100%;
`

export const TaskBtn = styled.button<{btnColor: string}>`
    background-color: transparent;
    border: 1px solid ${(props) => props.btnColor};
    border-radius: 20px;
    padding: 12px 0;
    color: ${(props) => props.btnColor};
    font-size: 16px;
    font-weight: 600;
    span {
        margin-right: 10px;
    }
    &:hover {
        cursor: pointer;
    }
`
export const TaskStatusWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 12px;
`

export const CountTask = styled.div`
    display: inline-flex;
    color: black;
`
export const CountTaskWrapper = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 12px;
    align-items: center;
`
export const CountNumber = styled.span`
    color: rgba(83, 123, 243, 1);
    font-weight:700;
`