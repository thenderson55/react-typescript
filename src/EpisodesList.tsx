import React from "react";
import { IEpisode } from "./interfaces";
import { CustomGridColumn, FavButton } from "./AppStyled";
import { Grid, Image } from "semantic-ui-react";

function EpisodesList(props: any) {
  const { episodes, favourites, toggleFavAction } = props;
  return (
    <Grid>
      <Grid.Row columns={3}>
        {episodes &&
          episodes.map((episode: IEpisode) => (
            <CustomGridColumn key={episode.id}>
              <Image
                src={episode.image.original}
                alt={`Rick and Morty episode${episode.name}`}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: 3
                }}
              >
                <div key={episode.id}>{episode.name}</div>
                <FavButton onClick={() => toggleFavAction(episode)}>
                  {favourites.includes(episode) ? "Unfav" : "Fav"}
                </FavButton>
              </div>
            </CustomGridColumn>
          ))}
      </Grid.Row>
    </Grid>
  );
}

export default EpisodesList;
