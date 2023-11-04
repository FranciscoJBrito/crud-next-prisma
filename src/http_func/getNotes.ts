import { NextResponse } from "next/server";

export const getNotes = async () => {
  const baseURL = `${process.env.BASE_URL}/api/notes`;
  const notes = await fetch(baseURL, { method: "GET" })
    .then((res) => res.json())
    .catch((error) =>
      NextResponse.json(
        {
          message: error.message,
        },
        {
          status: error.code,
        }
      )
    );

    return notes
};
