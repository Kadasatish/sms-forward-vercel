export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('📩 SMS Received:', req.body); // Vercel Logs లో కనిపిస్తుంది
    res.status(200).send('✅ SMS received!');
  } else {
    res.status(405).send('❌ Method Not Allowed');
  }
}
