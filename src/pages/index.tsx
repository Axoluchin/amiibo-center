import { Grid, Text } from "@nextui-org/react";
import axios from "axios";

import AmiiboCard from "../components/AmiiboCard";
import { amiiboProps } from "../utils/types";

const Home = ({ amiiboList }: { amiiboList: amiiboProps[] }) => {
  return (
    <div>
      <Text
        h2
        style={{
          textAlign: "center",
        }}
      >
        Amiibos: {amiiboList.length}
      </Text>
      <Grid.Container justify="space-around">
        {amiiboList.map((amiibo) => (
          <AmiiboCard key={amiibo.tail} amiibo={amiibo} />
        ))}
      </Grid.Container>
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data }: { data: { amiibo: amiiboProps[] } } = await axios.get(
    "https://amiiboapi.com/api/amiibo/"
  );

  return {
    props: {
      amiiboList: data.amiibo,
    },
  };
};

export default Home;
