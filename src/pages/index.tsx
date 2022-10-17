import { Grid, Text } from '@nextui-org/react'

import useAllAmiibo from '../hooks/useAmiibo'
import Loading from '../components/Loading'
import AmiiboCard from '../components/AmiiboCard'

const Home = () => {
  const {amiiboList, loading} = useAllAmiibo()

  if (loading){
    return (
        <Loading text='Loading Amiibos'/>
    )
  }
  
  return (
    <div>
      <Text h2 style={{
        textAlign: 'center'
      }}>Amiibos: {amiiboList.length}</Text>
      <Grid.Container justify='space-around'>
      {amiiboList.map(amiibo => <AmiiboCard key={amiibo.tail} amiibo={amiibo}/>)}
      </Grid.Container>
    </div>
  )
}

export default Home
