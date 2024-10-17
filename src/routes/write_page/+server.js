import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { usergmail } from "../store/store";

export async function POST({ request }) {
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("writes");

  const data1 = await request.json();

  let usergmail1="";
  usergmail.subscribe((value) => {usergmail1 = value;});

  let user;
  try {
    user = await db.collection("users").findOne({email:usergmail1});
    const result = await coll.insertMany([{
            title : data1.title,
            writing : data1.writing,
            date : new Date(),
            writer : user ? user.username : "No user found",
            written_type : data1.written_type,
            announce : data1.announce,
            writer_class : user?user.classNo: "No user found",
            writer_grade : user?user.grade: "No user found",
            comments : []
    }]);
    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
  } catch (error) {return new Response(JSON.stringify({ success: false, error }), { status: 500 });}
}

