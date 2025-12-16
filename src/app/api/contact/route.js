import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Configuração hardcoded do email (conforme solicitado)
// Para produção, mova a chave para variável de ambiente segura.
const resend = new Resend('re_bbCr1T5p_Ldc73JJSePn6i4J36LdtLMpk');
const RECIPIENT_EMAIL = 'contato@corpfianca.com';
const FROM_EMAIL = 'Corp Fiança <contato@corpfianca.com>';

// Templates de email por idioma
const emailTemplates = {
  pt: {
    subject: 'Nova mensagem de contato - Corp Fiança',
    html: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; color: #333; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .language-badge { background-color: #007bff; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; display: inline-block; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nova Mensagem de Contato</h2>
            <div class="language-badge">Idioma: Português (PT)</div>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nome:</div>
              <div class="value">${data.name || 'Não informado'}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email || 'Não informado'}</div>
            </div>
            <div class="field">
              <div class="label">Telefone:</div>
              <div class="value">${data.phone || 'Não informado'}</div>
            </div>
            <div class="field">
              <div class="label">Assunto:</div>
              <div class="value">${data.subject || 'Não informado'}</div>
            </div>
            <div class="field">
              <div class="label">Mensagem:</div>
              <div class="value">${data.message || 'Não informado'}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este email foi enviado através do formulário de contato do site Corp Fiança.</p>
            <p>Telefone: 0800 880 0800 | Email: contato@corpfianca.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
  },
  en: {
    subject: 'New contact message - Corp Fiança',
    html: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; color: #333; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .language-badge { background-color: #007bff; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; display: inline-block; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Message</h2>
            <div class="language-badge">Language: English (EN)</div>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">Subject:</div>
              <div class="value">${data.subject || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message || 'Not provided'}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent through the Corp Fiança website contact form.</p>
            <p>Phone: 0800 880 0800 | Email: contato@corpfianca.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
  },
  es: {
    subject: 'Nuevo mensaje de contacto - Corp Fiança',
    html: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #1a1a1a; color: #fff; padding: 20px; text-align: center; }
          .content { background-color: #f9f9f9; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-top: 5px; color: #333; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .language-badge { background-color: #007bff; color: white; padding: 5px 10px; border-radius: 3px; font-size: 12px; display: inline-block; margin-bottom: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Nuevo Mensaje de Contacto</h2>
            <div class="language-badge">Idioma: Español (ES)</div>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Nombre:</div>
              <div class="value">${data.name || 'No proporcionado'}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email || 'No proporcionado'}</div>
            </div>
            <div class="field">
              <div class="label">Teléfono:</div>
              <div class="value">${data.phone || 'No proporcionado'}</div>
            </div>
            <div class="field">
              <div class="label">Asunto:</div>
              <div class="value">${data.subject || 'No proporcionado'}</div>
            </div>
            <div class="field">
              <div class="label">Mensaje:</div>
              <div class="value">${data.message || 'No proporcionado'}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este correo fue enviado a través del formulario de contacto del sitio web de Corp Fiança.</p>
            <p>Teléfono: 0800 880 0800 | Email: contato@corpfianca.com</p>
          </div>
        </div>
      </body>
      </html>
    `,
  },
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, locale = 'pt' } = body;

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios: nome, email e mensagem' },
        { status: 400 }
      );
    }

    // Seleciona o template baseado no idioma
    const template = emailTemplates[locale] || emailTemplates.pt;

    const emailData = {
      name,
      email,
      phone: phone || 'Não informado',
      subject: subject || 'Contato via site',
      message,
    };

    // Log de tentativa (sem corpo completo)
    console.log('[contact-email] sending', {
      locale,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: template.subject,
      name,
      phone,
      messageLength: message?.length || 0,
    });

    const sendResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: template.subject,
      html: template.html(emailData),
    });

    if (sendResult.error) {
      throw new Error(sendResult.error?.message || 'Erro ao enviar email');
    }

    console.log('[contact-email] sent', {
      to: RECIPIENT_EMAIL,
      messageId: sendResult.data?.id,
      locale,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Email enviado com sucesso',
        messageId: sendResult.data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('[contact-email] error', {
      message: error?.message,
      stack: error?.stack,
    });
    return NextResponse.json(
      {
        error: 'Erro ao enviar email',
        details: error.message
      },
      { status: 500 }
    );
  }
}

