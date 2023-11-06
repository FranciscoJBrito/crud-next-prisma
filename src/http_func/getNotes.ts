import { NextResponse } from "next/server";

export const getNotes = async () => {
  const baseURL = `${process.env.BASE_URL}/api/notes`;
  const notes = await fetch(baseURL)
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

  return notes;
};

export const createNote = async (props: { title: string; content: string }) => {
  const baseURL = '/api/notes';
  const data = {
    title: props.title,
    content: props.content
  }
  await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => console.log(res))
    .catch(error => console.log(error))
};
