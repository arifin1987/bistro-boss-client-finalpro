

import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import './Feature.css'
const Feature = () => {
    return (
        <div className="featured-item bg fixed text-white pt-10 my-20">
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Item"

            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 px-36 bg-slate-500 bg-opacity-60">
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20,2029</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur sint est iste laboriosam perferendis animi error aliquid velit quia.</p>
                <button className="btn btn-outline border-0 border-b-4">Order Now</button>
            
            </div>
            </div>
            
        </div>
    );
};

export default Feature;