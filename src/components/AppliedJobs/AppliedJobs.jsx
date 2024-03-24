import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utlity/localsorage";
import Applied from "../Applied/Applied";
import { FaArrowDown } from "react-icons/fa";



const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    useEffect(() => {
        const storedJobsIds = getStoredJobApplication();
        if (jobs.length > 0) {
            // const jobApplied = jobs.filter(job =>)
            const appliedJobs = [];
            for (const id of storedJobsIds) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    appliedJobs.push(job);
                }
            }
            // console.log(jobs, storedJobsIds, appliedJobs)
            setAppliedJob(appliedJobs)
            setDisplayJobs(appliedJobs)
        }
    }, [jobs])

    const handleJobsFilter = (filter) =>{
        if(filter==="all"){
            setDisplayJobs(appliedJob);
        }
        else if(filter==="remote"){
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite  ==='Remote')
            setDisplayJobs(remoteJobs)
        }
        else if(filter === "onsite"){
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite ===  'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-16">Applied Jobs</h3>
            <div className="flex justify-end">
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By <FaArrowDown/> </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={()=> handleJobsFilter('all')}><a>All</a></li>
                        <li onClick={()=> handleJobsFilter('remote')}><a>Remote</a></li>
                        <li onClick={()=> handleJobsFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayJobs.map(apply => <Applied key={apply.id} apply={apply}></Applied>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;