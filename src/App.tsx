import React, { useState } from "react";
import { Store } from "./Store";
import { IEpisode, IAction, IEpisodesProps } from "./interfaces";
import { Header } from "./AppStyled";
import EpisodesList from "./EpisodesList";
// import Todo from "./Todo";

function App(): JSX.Element {
  // const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));
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

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);
    if (episodeInFav) {
      const updatedFavs = state.favourites.filter((fav: IEpisode) => {
        return fav.id != episode.id;
      });
      return dispatch({
        type: "REMOVE_FAV",
        payload: updatedFavs
      });
    } else {
      return dispatch({
        type: "ADD_FAV",
        payload: episode
      });
    }
  };

  const props: IEpisodesProps = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleFavAction
  };

  console.log("state: ", state);
  return (
    <>
      <Header>
        <h1>Hello</h1>
      </Header>
      {/* <React.Suspense fallback={<div>Loading...</div>}> */}
      <div style={{ margin: 10 }}>
        <EpisodesList {...props} />
      </div>
      {/* </React.Suspense> */}
    </>
  );
}

export default App;
