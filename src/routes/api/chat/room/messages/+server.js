// src/routes/api/chat/[roomId]/messages/+server.js


import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';


import { json } from '@sveltejs/kit';
// import { connectToDatabase } from '$lib/mongodb';

export async function GET({ params }) {
  const { roomId } = params;
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const messages = db.collection('messages');

  const chatMessages = await messages
    .find({ roomId })
    .sort({ timestamp: 1 })
    .toArray();

  return json(chatMessages);
}
