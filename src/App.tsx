import React, { useState } from "react";
import { Store } from "./Store";
import { IEpisode, IAction } from "./interfaces";
import { CustomGridColumn, Header } from "./AppStyled";
import { Grid, Image, Button } from "semantic-ui-react";

import Todo from "./Todo";

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

  const toggleFavAction = (episode: IEpisode): IAction =>
    dispatch({
      type: "ADD_FAV",
      payload: episode
    });

  return (
    <>
      <Header>
        <h1>Hello</h1>
      </Header>
      <div style={{ margin: 10 }}>
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
                  <Button onClick={() => toggleFavAction(episode)}>Fav</Button>
                </CustomGridColumn>
              ))}
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
}

export default App;
