import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, type } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Here you can integrate with email services like:
    // - Nodemailer (SMTP)
    // - SendGrid
    // - Resend
    // - EmailJS
    // For now, I'll just log the message and return success

    console.log("Contact Form Submission:", {
      name,
      email,
      subject,
      message,
      type,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email to your address
    // Example with nodemailer:
    /*
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'mdasharaf.dev@gmail.com',
      subject: `${type === 'feedback' ? '[FEEDBACK]' : '[CONTACT]'} ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Type: ${type}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    });
    */

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
