import { useParams } from "react-router";

export default function User()
{
    const {userid} = useParams();
    return(
        <h1>{userid}</h1>
    );
}