import { SearchProvider } from "./SearchContext";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./Components/SharedLayout/SharedLayout";
import SearchPage from "./Pages/SearchPage";
import CompanyPage from "./Pages/CompanyPage";

function App() {

  return (
    <BrowserRouter>
      <SearchProvider>
        <Navbar />
        <Routes>
          <Route element={<SharedLayout />} />
          <Route path="/" element={<Hero />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="company/:symbol" element={<CompanyPage />}/>
        </Routes>
      </SearchProvider>
    </BrowserRouter>
  );
}

export default App;
