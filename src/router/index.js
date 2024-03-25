import { createRouter, createWebHashHistory } from "vue-router";

import TaskList from "../components/TaskList.vue";

const TaskListView = {
  path: "/",
  name: "NowPlaying",
  component: TaskList,
};

const routes = [TaskListView];

// const Routes = {
//   folder: folder.name,
//   playlists: playlists.name,
//   playlist: playlistView.name,
//   album: albumView.name,
//   artist: artistView.name,
//   artistDiscography: artistDiscography.name,
//   settings: settings.name,
//   search: search.name,
//   notFound: notFound.name,
//   artistTracks: ArtistTracks.name,
//   favorites: favorites.name,
//   favoriteAlbums: favoriteAlbums.name,
//   favoriteTracks: favoriteTracks.name,
//   favoriteArtists: favoriteArtists.name,
//   nowPlaying: NowPlayingView.name,
//   Home: Home.name,
//   AlbumList: AlbumListView.name,
//   ArtistList: ArtistListView.name,
//   Lyrics: LyricsView.name,
// };

const router = createRouter({
  mode: "hash",
  history: createWebHashHistory(),
  routes,
});

export default router;
