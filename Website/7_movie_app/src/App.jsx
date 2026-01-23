import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <MovieCard
      movie={{ title: "Gone with the Wild", release_date: "2024" }}
    ></MovieCard>
  );
}

export default App;
