import { NODE_ENV } from '$env/static/private';
import clientPromise from '$lib/database/clientPromise';

export async function GET({ url }) {
  const client = await clientPromise;
  const db = client.db(NODE_ENV);  // 실제 데이터베이스 이름으로 수정
  const coll = db.collection('users');  // 실제 컬렉션 이름으로 수정

  // 쿼리 파라미터에서 이메일 값을 가져옴
  const email = url.searchParams.get('email');

  try {
    // 특정 이메일을 기준으로 데이터를 조회
    const user = await coll.findOne({ writer_email: email });

    if (!user) {
      return new Response(JSON.stringify({ success: false, message: 'User not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, user }), { status: 200 });

  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: 'Failed to retrieve data' }), { status: 500 });
  }
}
