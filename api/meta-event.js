export default async function handler(req, res) {
  const token = process.env.META_ACCESS_TOKEN;
  const pixelId = "1465231634945869";

  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { event_name, user_data } = req.body;

  const response = await fetch(
    `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${token}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            event_name,
            event_time: Math.floor(Date.now() / 1000),
            action_source: "website",
            user_data,
          },
        ],
      }),
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
