import { useState } from "react";
import Blogs from "../components/Blogs/Blogs";
import Calculator from "../components/Calculator/Calculator";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const Home = () => {

    const [dark, setDark] = useState<boolean>(false);

    return ( 
        <div className={`${dark && "dark-mode-on"}`}>
        <Header dark={dark} setDark={setDark}/>
        <Hero />
        <Blogs />
        <Calculator />
        <Footer />
        </div>
    );
}

export default Home;