import Photo from "./Photo";
import Name from "./Name";
import JobPosition from "./JobPosition";
import Link from "./Link";
import Button from "./Button";

export default function Info(){
    return (
        <div className="info">
            <Photo />
            <Name />
            <JobPosition />
            <Link />
            <Button />
        </div>

    )
}