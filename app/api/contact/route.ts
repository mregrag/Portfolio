import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return Response.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        if (!process.env.RESEND_API_KEY) {
            return Response.json(
                { error: "Missing RESEND_API_KEY." },
                { status: 500 }
            );
        }

        if (!process.env.CONTACT_TO_EMAIL) {
            return Response.json(
                { error: "Missing CONTACT_TO_EMAIL." },
                { status: 500 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [process.env.CONTACT_TO_EMAIL],
            replyTo: email,
            subject: `[Portfolio] ${subject}`, text: `Name: ${name} Email: ${email} Message: ${message}`,
        });

        if (error) {
            return Response.json(
                { error: error.message || "Failed to send email." },
                { status: 500 }
            );
        }

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json(
            { error: "Server failed to send email." },
            { status: 500 }
        );
    }
}
