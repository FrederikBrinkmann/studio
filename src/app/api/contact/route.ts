import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, company, email, message } = await request.json();

    // Validierung
    if (!name || !company || !email || !message) {
      return Response.json(
        { error: 'Alle Felder sind erforderlich' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '25'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false, // Self-signed certificate akzeptieren
      },
    });

    // Empfänger aus ENV
    const recipients = [
      process.env.RECIPIENT_EMAIL_1,
      process.env.RECIPIENT_EMAIL_2,
    ].filter(Boolean);

    // Email versendet
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipients.join(', '),
      subject: `Neue Anfrage von ${name} - ${company}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Unternehmen:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return Response.json({
      success: true,
      message: 'Email erfolgreich versendet',
    });
  } catch (error) {
    console.error('Mail-Fehler:', error);
    return Response.json(
      { error: 'Fehler beim Versenden der Email' },
      { status: 500 }
    );
  }
}
