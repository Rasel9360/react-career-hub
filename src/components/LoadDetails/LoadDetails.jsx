import { useLoaderData, useParams } from "react-router-dom";
import { CiCalendar, CiDollar } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utlity/localsorage";

const LoadDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    // console.log(id, jobs)
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    // console.log(job)

    const handleApplied = () => {
        saveJobApplication(idInt)
        toast.success("Successfully applied for the Job!");
    }
    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-20">Job Details </h3>
            <div className="grid grid-cols-4 gap-2 mt-5">
                <div className="col-span-3 border-2 space-y-3">
                    <h2 className="">
                        <span className="font-bold">Job Description :</span>  {job.job_description}
                    </h2>
                    <p> <span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p> <span className="font-bold">Educational Requirements:</span> <br /> {job.educational_requirements}</p>
                    <p> <span className="font-bold">Experiences:</span> <br />  {job.experiences}</p>
                </div>
                <div className="border col-span-1">
                    <div className="bg-[#9873FF1A] p-4 space-y-3">
                        <h3 className="text-xl">Job Details</h3>
                        <hr />
                        <p className="flex gap-2 items-center"><span><CiDollar></CiDollar></span> <span className="font-bold">Salary :</span> {job.salary}</p>
                        <p className=" flex gap-2 "><span><CiCalendar /></span> <span className="font-bold">Job Title :</span> {job.job_title}</p>
                        <h3 className="text-xl font-bold">Contact Information</h3>
                        <hr />
                        <p><span className="font-bold">Phone : </span>{job.contact_information.phone}</p>
                        <p><span className="font-bold">Email : </span>{job.contact_information.email}</p>
                        <p><span className="font-bold">Address : </span>{job.contact_information.address}</p>
                    </div>
                    <button onClick={handleApplied} className="btn btn-primary w-full">Apply Now</button>
                </div>
                <ToastContainer />
            </div>

        </div>
    );
};

export default LoadDetails;