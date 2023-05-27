import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Feature from "../Feature/Feature";
import Testimonial from "../Testimonial/Testimonial";


import PopularMenu from "./PopularMenu/PopularMenu";



const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Bistro | Home</title>
        </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Feature></Feature>
            <Testimonial></Testimonial>
            
            
            
            </div>
    )
};

export default Home;