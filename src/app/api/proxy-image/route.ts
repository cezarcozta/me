import { NextResponse } from "next/server";

const ALLOWED_HOSTS = [
  "drive.google.com",
  "drive.usercontent.google.com",
  "lh3.googleusercontent.com",
  "i.imgur.com",
  "res.cloudinary.com",
  "images.unsplash.com",
  "picsum.photos",
];

export async function GET(request: Request) {
  const url = new URL(request.url);
  const remoteUrl = url.searchParams.get("url");

  if (!remoteUrl) {
    return NextResponse.json({ error: "Missing url param" }, { status: 400 });
  }

  let parsed;
  try {
    parsed = new URL(remoteUrl);
  } catch {
    return NextResponse.json({ error: "Invalid url" }, { status: 400 });
  }

  if (!ALLOWED_HOSTS.includes(parsed.hostname)) {
    return NextResponse.json(
      { error: `Host '${parsed.hostname}' not allowed` },
      { status: 403 }
    );
  }

  const apiRes = await fetch(remoteUrl);
  if (!apiRes.ok) {
    return NextResponse.json({ error: "Could not fetch image" }, { status: 502 });
  }

  const contentType = apiRes.headers.get("content-type") || "application/octet-stream";
  const headers = new Headers();
  headers.set("Content-Type", contentType);
  headers.set("Cache-Control", "private, no-store, max-age=0");

  return new Response(apiRes.body, { status: apiRes.status, headers });
}
