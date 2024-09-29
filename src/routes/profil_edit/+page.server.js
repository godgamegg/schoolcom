
import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { usergmail } from '../store/store.js';

let usergmail1="";
usergmail.subscribe((value) => {
    usergmail1 = value;
  });
console.log(usergmail1)  



export const load = async (event) => {
  const session = await event.locals.auth();
  if (!session) {
    redirect(307, 'auth/signin');
  }

  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("users");

  // 컬렉션에서 데이터를 조회하고 _id를 문자열로 변환
  const user1 = await coll.find({email:usergmail1}).toArray();

  // _id를 문자열로 변환
  const serializeduser = user1.map(users => ({
    ...users,
    _id: users._id.toString()
  }));
// console.log(user)
  return {
    session,
    user1: serializeduser // 직렬화 가능한 데이터를 반환
  };
};
    
