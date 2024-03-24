"use server"

import "dotenv/config";
import NewsCard from "@/components/card";

async function news () {
    const req = await fetch(`https://newsapi.org/v2/everything?q='green energy'&apiKey=${process.env.NEWS_API_KEY}`);
    const resp = await req.json();
    return resp;
}; 

export default async function News () {
    const data = await news();

    return (
        <>
            <h1 className="mt-10 pl-8 h1 border-green-50 border-l-4">Trending News</h1>                
            <div className="relative grid grid-flow-row auto-rows-max lg:grid-cols-2 items-end justify-center overflow-hidden p-8">                                
                {data.articles ? (
                    data.articles.map((i: { title: string, url: string, urlToImage: string, description: string, publishedAt: string }) => {
                        if (i.urlToImage && i.urlToImage != "https://cdn.vox-cdn.com/thumbor/h5kNb06_KICKtrH3Z6uuDM5gxG4=/0x0:4000x2656/1200x628/filters:focal(2000x1328:2001x1329)/cdn.vox-cdn.com/uploads/chorus_asset/file/25283603/566448831.jpg" && i.urlToImage != "https://i.abcnewsfe.com/a/3be4cffc-d6ea-47eb-90c8-cbc0d6b31c11/wirestory_a3d63c87a6f59a66f7f103f325214f64_16x9.jpg?w=1600") {
                            return (   
                                    <NewsCard key={i.title} url={i.url} title={i.title} image={i.urlToImage} published={i.publishedAt.slice(0, 10)} description={i.description}/>
                            );
                        }
                })) : (
                    <p>Loading...</p>
                )}                                
            </div>                
        </>
    );
};

