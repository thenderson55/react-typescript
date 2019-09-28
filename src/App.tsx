import React, { useState } from "react";
import { Store } from "./Store";
import { CustomGridColumn } from "./AppStyled";
import { Grid, Image, Container } from "semantic-ui-react";

import Todo from "./Todo";

interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  url: string;
}

function App(): JSX.Element {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    const fetchDataAction = async () => {
      const URL =
        "http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
      try {
        const data = await fetch(URL);
        const dataJSON = await data.json();
        return dispatch({
          type: "FETCH_DATA",
          payload: dataJSON._embedded.episodes
        });
      } catch (err) {
        console.log("error", err);
      }
    };
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  return (
    <Container>
      <h1>Hello</h1>
      <Grid>
        <Grid.Row columns={3}>
          {state.episodes &&
            state.episodes.map((episode: IEpisode) => (
              <CustomGridColumn key={episode.id}>
                <Image
                  src={episode.image.medium}
                  alt={`Rick and Morty episode${episode.name}`}
                />
                <div key={episode.id}>{episode.name}</div>
              </CustomGridColumn>
            ))}
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
