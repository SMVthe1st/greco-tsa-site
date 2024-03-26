import "dotenv/config";

async function session () {
    const req = await fetch(`https://api.inworld.ai/v1/workspaces/${process.env.NEXT_PUBLIC_WORKSPACE_ID}/characters/gaia:openSession`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Basic ${process.env.NEXT_PUBLIC_INWORLD_AUTH_SIGNATURE}==`
        },
        body: JSON.stringify({
            "character": `workspaces/${process.env.NEXT_PUBLIC_WORKSPACE_ID}/characters/gaia`,
            "user": { "givenName": "user" }
        })
    });
    const resp = await req.json();
    return resp;
};

export default async function Talk (message: any) {
    const data = await session();
    const req2 = await fetch(`https://api.inworld.ai/v1/workspaces/${process.env.NEXT_PUBLIC_WORKSPACE_ID}/sessions/${data.name}/sessionCharacters/${data.sessionCharacters[0].character}:sendText`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "authorization": `Basic ${process.env.NEXT_PUBLIC_INWORLD_AUTH_SIGNATURE}==`,
            "Grpc-Metadata-session-id": `${data.name}`
        },
        body: JSON.stringify({
            "text": message
        })
    });

    const resp2 = await req2.json();
    const output = resp2.textList;
    return output;
};
