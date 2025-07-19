export default async function GitHubDataFetch()
{
    try{
        const result = await fetch('https://api.github.com/users/muhammadkhushamali');
        return result.json();
    }
    catch(err)
    {
        console.error('Failed To Fetch Data');
    }
}