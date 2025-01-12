const API_URL = process.env.API_URL;

export const GET = async () => {
  return Response.json("test");
};

export const POST = async (request: Request) => {
  const body = await request.json();

  console.log(`routes ${JSON.stringify(body)}`);

  const res = await fetch(`${API_URL}/login`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return Response.json(data);
};
