import Photo from "./Photo";
import Name from "./Name";
import JobPosition from "./JobPosition";
import Link from "./Link";

export default function Info(){
    return (
        <div className="info">
            <Photo />
            <Name />
            <JobPosition />
            <Link />
        </div>

    )
}