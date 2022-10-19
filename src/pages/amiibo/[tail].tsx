import { useRouter } from "next/router";
import Head from "next/head";
import {
  Text,
  Container,
  Image,
  Divider,
  Grid,
  Spacer,
} from "@nextui-org/react";

import useOneAmiibo from "../../hooks/useOneAmiibo";
import Loading from "../../components/Loading";
import TypeBadge from "../../components/TypeBadge";

const AmiiboDetails = () => {
  const router = useRouter();
  const { tail } = router.query;
  const { amiibo, loading } = useOneAmiibo(tail as string);

  if (loading) {
    return <Loading text="Loading Amiibo" />;
  }

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

export default AmiiboDetails;
