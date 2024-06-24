import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  try {
    async function getData() {
      const response = await axios.post(
        "https://id.twitch.tv/oauth2/token",
        {
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          grant_type: "client_credentials",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const token = response.data.access_token;

      const response2 = await axios.get(
        "https://api.twitch.tv/helix/streams?user_login=f1ashko",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Client-Id": process.env.CLIENT_ID,
          },
        }
      );

      return response2.data.data;
    }
    const data = await getData();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "error" }, { status: 400 });
  }
}
