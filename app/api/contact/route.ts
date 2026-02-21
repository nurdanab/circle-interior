import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_BOT_TOKEN = "8216942981:AAE927YOlak3pQdk7p75xnTZTZWna5Ur4O8";
const TELEGRAM_CHAT_ID = "-1003814404582";

export async function POST(request: NextRequest) {
  try {
    const { name, phone } = await request.json();

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const message = `Новая заявка с сайта!\n\nИмя: ${name}\nТелефон: ${phone}`;

    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to send message to Telegram");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Telegram API error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
