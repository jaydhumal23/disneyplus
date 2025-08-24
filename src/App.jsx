import './App.css'
import Header from "./components/Header.jsx";
import Slider from './components/Slider.jsx';
import ProductionHouse from './components/ProductionHouse.jsx';
import GenreMovieList from './components/GenreMovieList.jsx';
export default function App() {
    return (
        <>
            <Header />
            <Slider />
            <ProductionHouse />
            <GenreMovieList />
        </>
    )

}