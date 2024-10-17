import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { usergmail } from "../store/store";
import { ObjectId } from 'mongodb'; // ObjectId 임포트

let usergmail1 = "";
usergmail.subscribe((value) => { usergmail1 = value; });

export async function POST({ request }) {
    console.log(1);
    const client = await clientPromise;
    const db = client.db(NODE_ENV);
    const writesCollection = db.collection("writes");
    const usersCollection = db.collection("users");
    
    // request에서 데이터 가져오기  
    const data1 = await request.json();

    try {
        // 사용자 정보 조회
        const user = await usersCollection.findOne({ email: usergmail1 });
        const username = user ? user.username : "No user found";
        
        // writing_ID를 ObjectId 형식으로 변환
        let writingID = new ObjectId(data1.writing_ID); // new 키워드 추가
        console.log(123131231313123, writingID);

        // 댓글 추가
        const newComment = {
            text: data1.writing,
            date: new Date(),
            writer: username
        };

        // writes 문서의 comments 배열에 댓글 추가
        const result = await writesCollection.updateOne(
            { _id: writingID },
            { $push: { comments: newComment } }
        );

        console.log("Update Result:", result); // 결과 로그 출력
        
        // 데이터가 업데이트 되었는지 확인
        if (result.modifiedCount === 0) {
            console.error("No documents were updated. Check the writingID or comments field.");
        }

        return json({ success: true, result }, { status: 200 });
    } catch (error) {
        console.error("Error adding comment:", error);
        return json({ success: false, error: error.message }, { status: 500 });
    }
}
