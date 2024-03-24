const JobCart = ({job}) => {
    const {logo, category_name, availability} =  job;
    return (
        <div>
            <div className="bg-[#9873FF0D] p-10 rounded-xl">
                <img src={logo} alt="" />
                <h3 className="font-bold">{category_name}</h3>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default JobCart;