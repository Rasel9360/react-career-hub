import user from "../../assets/user.png"

const Banner = () => {
    return (
        <div>
            <div className="hero lg:py-10 bg-[#7E90FE0D] rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="flex-1">
                        <img src={user} className="max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">One Step Closer To Your <br /> <h2 className="text-[#9873FF] mt-5">Dream Job</h2></h1>
                        <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;