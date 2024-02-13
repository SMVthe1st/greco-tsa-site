import "dotenv/config";

async function news () {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
}; 

export default async function News () {
    const data = await news();
 
    return (
        <>
            <h1>Latest News</h1>
            <h2>{process.env.NEWS_API_KEY}</h2>
            <div className="">
                {data.articles ? (
                    data.articles.map((i: { title: string, url: string, urlToImage: string, description: string, publishedAt: string }) => {
                        return (
                            <div key={i.title}>                        
                                <a href={i.url}>
                                    <img src={i.urlToImage} alt={i.description}></img>
                                    <h2>{i.title}</h2>
                                    <p>{i.publishedAt}</p>
                                    <p>{i.description}</p>
                                </a>
                            </div>
                        );
                })) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};
