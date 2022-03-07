import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 600px;
  margin: auto;
`

export const Title = styled.h2`
  margin: 0;
  padding: 20px 0;
  text-align: center;
`

export const Search = styled.div`
  position: relative;
  width: 350px;
  margin: auto;
  text-align: center;
`

export const Input = styled.input`
  box-sizing: border-box;
  height: 40px;
  min-width: 350px;
  padding: 0 12px;
`

export const List = styled.ul`
  position: absolute;
  right: 0;
  left: 0;
  list-style: none;
  padding: 0;
  margin: 0;
  background: #f9f9f9;
  border-left: 1px solid;
  border-right: 1px solid;
  max-height: 200px;
  overflow-y: scroll;
`

export const ListItem = styled.li`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid;
  padding: 0 12px;
  cursor: pointer;
`