import "dotenv/config";

async function session () {
    const req = await fetch("https://api.inworld.ai/v1/workspaces/default-dszrtuet_4tvehuoopv_1q/characters/gaia:openSession", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Basic ${process.env.INWORLD_AUTH_SIGNATURE}==`
        },
        body: JSON.stringify({
            "character": "workspaces/default-dszrtuet_4tvehuoopv_1q/characters/galadriel",
            "user": { "givenName": "user" }
        })
    });
    const resp = await req.json();
    return resp;
};

export default async function Test (message: any) {
    const data = await session();
    const req = await fetch(`https://api.inworld.ai/v1/workspaces/default-dszrtuet_4tvehuoopv_1q/sessions/${data.name}/sessionCharacters/${data.sessionCharacters[0].character}:sendText`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Basic ${process.env.INWORLD_AUTH_SIGNATURE}==`,
            "Grpc-Metadata-session-id": `${data.name}`
        },
        body: JSON.stringify({
            "text": message
        })
    });

    const resp = await req.json();
    const output = resp.textList;
    return output;
};
