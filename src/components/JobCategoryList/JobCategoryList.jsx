import { useEffect, useState } from "react";
import JobCart from "../JobCart/JobCart";


const JobCategoryList = () => {
    const [jobCart, setJobCart] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobCart(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center">Job Category List </h2>
            <p className="text-center my-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid lg:grid-cols-4 gap-10">
                {
                    jobCart.map(job => <JobCart key={job.id} job={job}></JobCart>)
                }
            </div>
        </div>
    );
};

export default JobCategoryList;