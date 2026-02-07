let playlists = JSON.parse(localStorage.getItem("playlists")) || [
  {
    name: "Contoh Playlist",
    videos: [
      { title: "Contoh Replay", video: "VIDEO_ID" }
    ]
  }
];