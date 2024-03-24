import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [jobLength, setJobLength] = useState(4)

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then((data) => setJobs(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl text-center my-10">
                Featured Jobs
            </h2>
            <p className="text-center mb-10">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="lg:grid grid-cols-2 gap-10">
                {
                    jobs.slice(0, jobLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className="flex justify-center items-center my-10">
                <div className={jobLength === jobs.length ? "hidden" : ''}>
                    <button
                        onClick={() => setJobLength(jobs.length)}
                        className="btn btn-primary">See All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;