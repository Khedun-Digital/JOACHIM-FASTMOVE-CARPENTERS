// Simple mock for local development. In production you'd replace with a real endpoint.
export async function handleMockLead(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }
  const body = await request.json().catch(() => ({}));
  // Simulate processing
  return new Response(JSON.stringify({ ok: true, received: body }), {
    headers: { 'Content-Type': 'application/json' },
    status: 200
  });
}

