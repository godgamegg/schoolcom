import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';

export const load = async (event) => {
  const session = await event.locals.auth();
  if (!session) {
    redirect(307, 'auth/');
  }
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("writes");
  const write = await coll.find({}).toArray();
  const serializedwrite = write.map(writes => ({
    ...writes,
    _id: writes._id.toString()
  }));

  return {
    session,
    write: serializedwrite 
  };
};
    
