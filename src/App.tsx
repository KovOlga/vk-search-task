import { Suspense, lazy } from "react";
import SearchForm from "./components/SearchFrom/SearchForm";
import Spinner from "./components/Spinner/Spinner";

const SearchResults = lazy(
  () => import("./components/SearchResults/SearchResults")
);

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  );
}
