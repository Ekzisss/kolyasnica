import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request) {
  const token = process.env.TOKEN;

  async function getData() {
    return await axios({
      method: "GET",
      url: "https://api.baserow.io/api/database/rows/table/315007/?user_field_names=true",
      headers: {
        Authorization: `Token ${token}`,
      },
    });
  }
  const data = await getData();

  return NextResponse.json(data.data.results, { status: 200 });
}
