import GitHubDataFetch from "./GithubDataFetch";

export default function GitHub()
{
    const data = GitHubDataFetch();

    return(
        <main>
            <h1>{data.name}</h1>
            <p>{data.location}</p>
        </main>
    );
}