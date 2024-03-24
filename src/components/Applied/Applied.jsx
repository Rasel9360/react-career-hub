import { Link } from "react-router-dom";

const Applied = ({apply}) => {
    const {id,job_title,company_name,remote_or_onsite,job_type,salary,location,logo} = apply
    return (
        <div className="flex justify-between items-center my-10 p-10 border-2 rounded-xl">
            <div className="flex gap-10 justify-center items-center">
                <div className="bg-base-200 p-16 rounded-xl">
                    <img src={logo} alt="" />
                </div>
                <div className="space-y-3">
                    <h2 className="card-title">{job_title}</h2>
                    <p className="text-xl">{company_name}</p>
                    <div>
                        <button className="btn btn-outline text-[#7E90FE] font-extrabold mr-5">{remote_or_onsite}</button>
                        <button className="btn btn-outline text-[#7E90FE] font-extrabold">{job_type}</button>
                    </div>
                    <div className="flex gap-2 text-xl">
                        <p>{location}</p>
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card-actions">
                    <Link to={`/job/${id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Applied;