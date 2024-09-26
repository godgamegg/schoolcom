// src/routes/api/chat/[roomId]/send/+server.js

import { redirect } from '@sveltejs/kit';
import clientPromise from '$lib/database/clientPromise';
import { NODE_ENV } from '$env/static/private';



import { json } from '@sveltejs/kit';
// import { connectToDatabase } from '$lib/mongodb';

export async function POST({ params, request }) {
  const { roomId } = params;
  
  const client = await clientPromise;
  const db = client.db(NODE_ENV);
  const messages = db.collection('messages');

  const { sender, message } = await request.json();
  const newMessage = { roomId, sender, message, timestamp: new Date() };

  await messages.insertOne(newMessage);

  return json({ status: 'success', message: newMessage });
}
