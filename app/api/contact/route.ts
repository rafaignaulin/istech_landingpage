import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Delivery via Resend (official SDK). Needs RESEND_API_KEY and istechdata.com verified in Resend.
// Without the key the form reports an error (and shows the mailto fallback) instead of
// pretending to send — the previous version silently dropped every message.
const FROM = process.env.CONTACT_FROM || 'ISTech site <noreply@istechdata.com>'
const TO = process.env.CONTACT_TO || 'contact@istechdata.com'

export async function POST(request: NextRequest) {
  let body: { name?: string; email?: string; message?: string }
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
  const name = (body.name || '').trim().slice(0, 200)
  const email = (body.email || '').trim().slice(0, 320)
  const message = (body.message || '').trim().slice(0, 5000)

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
  }
  if (!process.env.RESEND_API_KEY) {
    console.error('Contact form: RESEND_API_KEY not set, message not delivered')
    return NextResponse.json({ error: 'Email delivery not configured' }, { status: 503 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    replyTo: email,
    subject: `ISTech site — message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })
  if (error) {
    console.error('Contact form: Resend error', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 502 })
  }
  return NextResponse.json({ success: true, id: data?.id })
}
