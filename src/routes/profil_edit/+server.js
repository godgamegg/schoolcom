import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
  import { usergmail } from "../store/store";
export async function POST({ request }) {
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("users");

  let usergmail1="";
  usergmail.subscribe((value) => {
      usergmail1 = value;
    });
  console.log(12313123, usergmail1)  
  
  const data = await request.json();

  try {

    const result = await coll.updateOne(
      { email: usergmail1 },
      {
        $set: {
          nowmessage: data.nowmessage,
          mymessage1: data.mymessage1,
          mymessage2: data.mymessage2,
          mymessage3: data.mymessage3,
          mymessage4: data.mymessage4,
          mymessage5: data.mymessage5,
          mymessage6: data.mymessage6,
          mymessage7: data.mymessage7,
          nowlocation: data.nowlocation,
          birth: data.birth,
          // birth_lock: data.birth_lock ? 1 : 0,
          num : data.num,
          grade: data.grade,
          classNo: data.classNo,
          position: data.position,
          teacher_position: data.teacher_position,
          username:data.username,
        
        }
      }
    );

    return new Response(JSON.stringify({ success: true, result }), { status: 200 });
    
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
  
 
}


