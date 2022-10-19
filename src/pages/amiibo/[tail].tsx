import Head from "next/head";
import {
  Text,
  Container,
  Image,
  Divider,
  Grid,
  Spacer,
} from "@nextui-org/react";
import axios from "axios";
import TypeBadge from "../../components/TypeBadge";
import { amiiboProps } from "../../utils/types";

const AmiiboDetails = ({amiibo}:{amiibo: amiiboProps}) => {

  if (!amiibo) {
    return (
      <Container lg>
        <Text h6>Amiibo not found</Text>
      </Container>
    );
  }

  return (
    <Container lg>
      <Head>
        <title>{amiibo.name}</title>
      </Head>
      <Text h2 style={{ textAlign: "center" }}>
        {amiibo.name} - {amiibo.amiiboSeries}
      </Text>
      <Grid.Container gap={2} justify={"center"}>
        <Grid xs={12} sm={6}>
          <Image
            src={amiibo.image}
            alt={amiibo.name}
            height="300px"
            width="280px"
            objectFit="contain"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <Container>
            <Grid.Container alignItems="center" justify="space-between">
              <Text h2>{amiibo.character}</Text>
              <TypeBadge type={amiibo.type} />
            </Grid.Container>

            <Text h3>Game series: {amiibo.gameSeries}</Text>
            <Spacer y={2} />
            <Text h3>Release:</Text>
            <Grid.Container>
              <Grid xs={6}>
                <Text>🇺🇸 {amiibo.release.na || "No release"}</Text>
              </Grid>
              <Grid xs={6}>
                <Text>🇯🇵 {amiibo.release.jp || "No release"}</Text>
              </Grid>
              <Grid xs={6}>
                <Text>🇪🇺 {amiibo.release.eu || "No release"}</Text>
              </Grid>
              <Grid xs={6}>
                <Text>🇦🇺 {amiibo.release.au || "No release"}</Text>
              </Grid>
            </Grid.Container>
          </Container>
        </Grid>
      </Grid.Container>

      <Divider />
    </Container>
  );
};

export const getServerSideProps = async ({
  query: { tail },
}: {
  query: { tail: string };
}) => {
  const { data }: { data: { amiibo: amiiboProps[] } } = await axios.get(
    `https://amiiboapi.com/api/amiibo/?tail=${tail}`
  );

  return {
    props: {
      amiibo: data.amiibo[0],
    },
  };
};

export default AmiiboDetails;
