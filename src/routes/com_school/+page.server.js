import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { usergmail } from '../store/store.js';

let usergmail1="";
usergmail.subscribe((value) => {
    usergmail1 = value;
  });

export const load = async (event) => {
  const session = await event.locals.auth();
  if (!session) {
    redirect(307, 'auth/');
  }
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("writes");
  const user = await db.collection("users").find({email:usergmail1}).toArray();
  const write = await coll.find({}).toArray();
  // console.log(user)
  const serializeduser = user.map(users => ({
    ...users,
    _id: users._id.toString()
  }));
  const serializedwrite = write.map(writes => ({
    ...writes,
    _id: writes._id.toString()
  }));
  
  
  return {
    session,
    user:serializeduser,
    write: serializedwrite, 
  };
};
    
