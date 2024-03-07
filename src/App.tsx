import SearchForm from "./components/SearchFrom/SearchForm";
import SearchResults from "./components/SearchResults/SearchResults";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SearchForm />
      <SearchResults />
    </div>
  );
}
