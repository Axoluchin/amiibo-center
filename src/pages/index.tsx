import { Grid, Loading, Text } from '@nextui-org/react'

import useAllAmiibo from '../hooks/useAmiibo'
import AmiiboCard from '../components/AmiiboCard'

const Home = () => {
  const {amiiboList, loading} = useAllAmiibo()

  if (loading){
    return (
      <div>
        <Loading size='xl'/>
      </div>
    )
  }
  
  return (
    <div>
      <Text>Amiibo Lista</Text>
      <Grid.Container justify='space-around'>
      {amiiboList.map(amiibo => <AmiiboCard key={amiibo.tail} amiibo={amiibo}/>)}
      </Grid.Container>
    </div>
  )
}

export default Home
