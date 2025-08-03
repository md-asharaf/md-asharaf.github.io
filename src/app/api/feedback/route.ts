import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { rating, message, timestamp } = body;

    // Basic validation
    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Valid rating (1-5) is required" },
        { status: 400 }
      );
    }

    // Log the feedback (in production, you'd save to database)
    console.log("Quick Feedback Submission:", {
      rating,
      message: message || "(No message)",
      timestamp,
      userAgent: request.headers.get("user-agent"),
    });

    // TODO: Save to database or send email
    // You could store feedback in a database for analytics
    
    return NextResponse.json(
      { message: "Feedback received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Feedback submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
