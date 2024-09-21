// src/lib/db.js
import { MongoClient } from 'mongodb';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
  import { usergmail } from 'svelte/store/';
// MongoDB 연결 URI 및 데이터베이스 정보 (이미 환경에 설정되어 있다고 가정)

// 특정 이메일을 가진 유저 데이터 가져오기

let usergmail1="";
usergmail.subscribe((value) => {
    usergmail1 = value;
  });
console.log(usergmail1)  


export async function getUserByEmail(email) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // MongoDB에 연결
        const client = await clientPromise;
        const db = client.db(NODE_ENV);
        const collection = db.collection("users");

        // 특정 이메일을 가진 유저 데이터 가져오기
        const user = await collection.findOne({ email: usergmail1 });
        return user;
    } catch (error) {
        console.error('Error fetching user by email:', error);
        return null;
    } finally {
        await client.close();
    }
}