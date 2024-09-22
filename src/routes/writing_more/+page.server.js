
// import { redirect } from '@sveltejs/kit';
// import clientPromise from '$lib/database/clientPromise';
// import { NODE_ENV } from '$env/static/private';
// import { usergmail } from '../store/store.js';


// // console.log(usergmail1)  



// export const load = async (event) => {
//   const session = await event.locals.auth();
//   if (!session) {
//     redirect(307, 'auth/signin');
//   }

//   const client = await clientPromise;
//   const db = client.db(NODE_ENV);
//   const coll = db.collection("writes");

//   // 컬렉션에서 데이터를 조회하고 _id를 문자열로 변환
//   const write = await coll.find({}).toArray();

//   // _id를 문자열로 변환
//   const serializedwrite = write.map(writes => ({
//     ...writes,
//     _id: writes._id.toString()
//   }));

//   return {
//     session,
//     write: serializedwrite // 직렬화 가능한 데이터를 반환
//   };
// };
    
