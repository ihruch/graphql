
query {
  movies {
    name,
    genre
  }
}

query($id: ID) {
  movie(id: $id) {
    name,
    genre
  }
}