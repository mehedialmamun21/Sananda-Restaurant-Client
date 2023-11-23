import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-5 my-20">

            <SectionTitle
                subHeading="Check It Out"
                heading="Featured Item"
            > </SectionTitle>

            <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pt-12 pb-20 px-36">

                <div>
                    <img src={featuredImg} alt="" />
                </div>

                <div className="md:ml-10">
                    <p>Nov 23, 2023</p>
                    <p className="uppercase"> Where can i get some? </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquid asperiores accusamus delectus? Debitis totam cumque
                        aspernatur culpa veritatis consequuntur hic facilis,
                        sint non repudiandae, aliquid dolor reprehenderit itaque
                        maiores quis error? Nihil, provident ab? Tempora,
                        ad necessitatibus. Quibusdam sequi id molestiae aut neque qui,
                        fugit inventore vero quidem expedita quaerat.</p>
                    <button className="btn btn-outline border-0 border-y-4 mt-5 bg-yellow-500 px-10 font-serif">Order Now</button>
                </div>

            </div>

        </div>
    );
};

export default Featured;