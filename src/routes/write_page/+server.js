import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { usergmail } from "../store/store";

export async function POST({ request }) {
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("writes");


  const data1 = await request.json();

  let usergmail1="";
  usergmail.subscribe((value) => {
      usergmail1 = value;
    });
  // console.log(usergmail1)  
  

  let user;
  try {

    user = await db.collection("users").findOne({email:usergmail1});
    const result = await coll.insertMany(
     [{
            title : data1.title,
            writing : data1.writing,
            comments : "",
            like : 0,
            hate : 0,
            date : new Date(),
            written_page : "추가 예정",
            writer : user ? user.username : "No user found", 
            writer_grade : user ? user.grade : "No user found",
            writer_class : user ? user.classNo : "No user found",
            written_type : data1.par_type,
        }]  
    );

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
    
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
  
 
}


