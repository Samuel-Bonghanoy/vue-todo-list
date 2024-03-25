import { createRouter, createWebHashHistory } from "vue-router";

const NowPlayingView = {
  path: "/",
  name: "NowPlaying",
};

const routes = [];

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
