import { createRouter, createWebHistory } from "vue-router";

import TaskList from "../components/TaskList.vue";
import ListItem from "../components/ListItem.vue";

const TaskListView = {
  path: "/",
  name: "TaskList",
  component: TaskList,
};

const TaskItemView = {
  path: "/task/:id",
  name: "TaskItem",
  component: ListItem,
};

const routes = [TaskListView, TaskItemView];

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
  history: createWebHistory(),
  routes,
});

export default router;
