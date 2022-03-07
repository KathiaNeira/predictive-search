import React from 'react'
import axios from 'axios'
import {
  Wrapper,
  Search,
  Title,
  List,
  ListItem,
  Input
} from './styled'
import Character from '../character/character'
import useDebounce from '../../hooks/useDebounce'

const PredictiveSearch = () => {
  const [charactersName, setCharactersName] = React.useState([])
  const [filterList, setFilterList] = React.useState([])
  const [characterInformation, SetCharacterInformation] = React.useState(null)

  const [searchTerm, setSearchTerm] = React.useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  React.useEffect(() => {
    const fetchData = async() => {
      if (!debouncedSearchTerm) setFilterList([])
      await handleChange(debouncedSearchTerm)
    }
    fetchData()

  }, [debouncedSearchTerm])

  const handleChange = async (search) => {
    if (search.length <= 2) return
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character?name=${search}`)
    setCharactersName(search)
    if (data) setFilterList(data.results)
  }

  const addBold = (name) => {
    let regex = new RegExp(charactersName, 'gi')
    const src = name.replace(regex, (charactersName) => {
      return `<strong>${charactersName}</strong>`
    })
    return (
      <span dangerouslySetInnerHTML={{__html: src}} ></span>
    )
  }
  
  const handleClick = (element) => {
    setFilterList([])
    SetCharacterInformation(element)
  }

  return (
    <Wrapper>
      <Title>Buscador Predictivo</Title>
      <Search>
        <Input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
        {filterList &&
          <List>
          {
            filterList.map((element, index) => (
              <ListItem key={index} onClick={() => handleClick(element)}>{addBold(element.name)}</ListItem>
            ))
          }
          </List>
        }
      </Search>
      {characterInformation &&
        <Character element={characterInformation} />
      }
    </Wrapper>
  )
}

export default PredictiveSearch