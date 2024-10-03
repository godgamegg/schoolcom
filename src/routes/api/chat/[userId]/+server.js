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









export async function GET({ params }) {
    const client = await clientPromise;
    const db = client.db(NODE_ENV);
    
    const chat = await db.collection('chats').findOne({
        participants: { $all: [params.userId, usergmail1] } // 현재 로그인한 유저 ID 필요
      });
      
      // 대화가 없으면 빈 배열 반환 (새 채팅 창 준비)
      return json(chat ? chat.messages : []);
}


export async function POST({ request, params }) {
  const { text } = await request.json();
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const coll = db.collection("users");
  const currentUserId = usergmail1; // 현재 로그인한 사용자 ID로 교체해야 함
  
  const user1 = await coll.find({email:usergmail1}).toArray();
  // console.log(user1[0].username)




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
        $push: { messages: { sender: user1[0].username, text, timestamp: new Date() } }  // 메시지 추가
      }
    );
  } else {
    // 3. 대화가 없을 경우 새로 생성
    await db.collection('chats').insertOne({
      participants: [params.userId, currentUserId],  // participants 필드 명시적으로 설정
      messages: [{ sender: user1[0].username, text, timestamp: new Date() }],  // 메시지 추가
      createdAt: new Date()  // 대화 생성 시간
    });
  }

    
    return json({ success: true });
  }