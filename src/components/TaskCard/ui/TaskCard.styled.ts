import styled from 'styled-components'

export const Task = styled.div<{color: string}>`
    border: 1px solid ${props => props.color};
    color: black;
    opacity: 1 !important;
    width: 100%;
    border-radius: 16px;
    padding: 16px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    gap: 16px;
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
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const CheckIcon = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: rgba(96, 166, 18, 1);
    border-radius: 50%;
    margin-right: 8px;
`