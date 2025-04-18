import { type NextRequest, NextResponse } from "next/server";

async function sendTrackingData(url: string, userAgent: string) {
  try {
    await fetch("https://www.citeanalytics.com/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectId: "26e7cc55-f648-4c30-ab04-15f02f63ff31",
        url,
        userAgent,
      }),
    });
    console.log("Successfully sent tracking data");
  } catch (error: unknown) {
    console.error("Failed to send tracking data:", error);
  }
}

export async function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  await sendTrackingData(request.url, userAgent);

  return NextResponse.next();
}
