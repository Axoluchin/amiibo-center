import Router from "next/router";
import { Card, Grid, Spacer, Text } from "@nextui-org/react";

import TypeBadge from "./TypeBadge";
import { amiiboProps } from "../utils/types";

const AmiiboCard = ({ amiibo }: { amiibo: amiiboProps }) => {
  return (
    <Card
      isHoverable
      isPressable
      style={{
        maxWidth: "350px",
        margin: "8px",
      }}
      onClick={()=> Router.push(`/amiibo/${amiibo.tail}`)}
    >
      <Card.Header
        style={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Text h3 style={{ flex: 9 }}>
          {amiibo.name}
        </Text>
        <TypeBadge type={amiibo.type} />
        <Text h6 style={{ width: "100%" }}>
          {amiibo.amiiboSeries}
        </Text>
      </Card.Header>
      <Card.Divider />
      <Spacer/>
      <Card.Image src={amiibo.image} width="100%" height="250px" />
      <Card.Body>
        <Grid.Container>
          <Grid xs={6}>
            <Text h5>Character:</Text>
          </Grid>
          <Grid xs={6} justify={'flex-end'}>
            <Text h5 >
              {amiibo.character}
            </Text>
          </Grid>
          <Grid xs={6}>
            <Text h5>Game Series:</Text>
          </Grid>
          <Grid xs={6} justify={'flex-end'}>
            <Text h5>{amiibo.gameSeries}</Text>
          </Grid>
        </Grid.Container>
        <Spacer/>
        <Text h5>Release:</Text>
        <Grid.Container>
          <Grid xs={6}>
            <Text>🇺🇸 {amiibo.release.na || "No release"}</Text>
          </Grid>
          <Grid xs={6} justify={'flex-end'}>
            <Text>🇯🇵 {amiibo.release.jp || "No release"}</Text>
          </Grid>
          <Grid xs={6}>
            <Text>🇪🇺 {amiibo.release.eu || "No release"}</Text>
          </Grid>
          <Grid xs={6} justify={'flex-end'}>
            <Text>🇦🇺 {amiibo.release.au || "No release"}</Text>
          </Grid>
        </Grid.Container>
      </Card.Body>
    </Card>
  );
};

export default AmiiboCard;
