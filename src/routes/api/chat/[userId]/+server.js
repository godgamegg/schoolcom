// src/routes/api/chat/[userId]/+server.js
import { json } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { usergmail, userid } from '../../../store/store.js';

import { page } from "$app/stores"; // 유저 ID를 가져오기 위해 사용

let usergmail1="";
usergmail.subscribe((value) => {
    usergmail1 = value;
  }); 

  



// export const load = async (event) => {
//     const session = await event.locals.auth();
//     if (!session) {
//       redirect(307, 'auth/signin');
//     }
  
//     const client = await clientPromise;
//     const db = client.db(NODE_ENV);
//     const coll = db.collection("users");
  
//     // 컬렉션에서 데이터를 조회하고 _id를 문자열로 변환
//     const user1 = await coll.find({email:usergmail1}).toArray();
  
//     // _id를 문자열로 변환
//     const serializeduser = user1.map(users => ({
//       ...users,
//       _id: users._id.toString()
//     }));
//   // console.log(user)
//     return {
//       session,
//       user1: serializeduser // 직렬화 가능한 데이터를 반환
//     };
//   };
      
  
export async function GET({ params }) {
    const client = await clientPromise;
    const db = client.db(NODE_ENV);
    const chat = await db.collection('chats').findOne({
        participants: { $all: [params.userId, usergmail1] } // 현재 로그인한 유저 ID 필요
      });
      
      // 대화가 없으면 빈 배열 반환 (새 채팅 창 준비)
      return json(chat ? chat.messages : []);
}

// export async function POST({ request, params }) {
//   const { text } = await request.json();
//   console.log("11");
//   const client = await clientPromise;
//   console.log("22")
//   const db = client.db(NODE_ENV);
//   console.log("3")
  
//   await db.collection('chats').findOneAndUpdate(
//     { participants: { $all: [params.userId, 'currentUserId'] } }, // 기존 대화를 찾음
//     { 
//       // 새로운 메시지 추가
//       $push: { messages: { sender: 'currentUserId', text, timestamp: new Date() } },
//       // participants에 두 유저를 추가 (upsert 시 새로운 대화 생성)
//       $setOnInsert: { participants: [params.userId, 'currentUserId'], createdAt: new Date() }
//     },
//     { upsert: true } // 대화가 없으면 새로운 대화 생성
//   );
//   console.log("44")
//   return json({ success: true });
// }


export async function POST({ request, params }) {
    const { text } = await request.json();
    const client = await clientPromise;
    const db = client.db(NODE_ENV);
  
    const currentUserId = usergmail1; // 현재 로그인한 사용자 ID로 교체해야 함
  
    // 대화가 없으면 새로운 대화 생성 및 메시지 추가
// 1. 기존 대화가 있는지 확인
const existingChat = await db.collection('chats').findOne({
  participants: { $all: [params.userId, currentUserId] }
});

if (existingChat) {
  // 2. 대화가 있을 경우 메시지 추가
  await db.collection('chats').updateOne(
    { _id: existingChat._id },  // 대화의 _id로 업데이트
    { 
      $push: { messages: { sender: currentUserId, text, timestamp: new Date() } }  // 메시지 추가
    }
  );
} else {
  // 3. 대화가 없을 경우 새로 생성
  await db.collection('chats').insertOne({
    participants: [params.userId, currentUserId],  // participants 필드 명시적으로 설정
    messages: [{ sender: currentUserId, text, timestamp: new Date() }],  // 메시지 추가
    createdAt: new Date()  // 대화 생성 시간
  });
}

  
    return json({ success: true });
  }