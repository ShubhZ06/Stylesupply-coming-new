
import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const rawKey = process.env.GOOGLE_PRIVATE_KEY ?? "";
    // Handle both literal \n (from .env.local) and real newlines
    const privateKey = rawKey.includes("\\n")
      ? rawKey.replace(/\\n/g, "\n")
      : rawKey;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // Format timestamp as DD/MM/YY HH:MM:SS in IST
    const now = new Date();
    const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const dd = String(ist.getDate()).padStart(2, "0");
    const mm = String(ist.getMonth() + 1).padStart(2, "0");
    const yy = String(ist.getFullYear()).slice(-2);
    const hh = String(ist.getHours()).padStart(2, "0");
    const min = String(ist.getMinutes()).padStart(2, "0");
    const ss = String(ist.getSeconds()).padStart(2, "0");
    const timestamp = `${dd}/${mm}/${yy} ${hh}:${min}:${ss}`;

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Sheet1!A:B",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[email, timestamp]],
      },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", JSON.stringify(err, Object.getOwnPropertyNames(err)));
    return NextResponse.json({ error: "Failed to save email" }, { status: 500 });
  }
}
