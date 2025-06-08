"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

// Email validation schema
const emailSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  institution: z.string().min(1, "Institution name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type EmailFormData = z.infer<typeof emailSchema>

// Create a transporter with SMTP configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.example.com",
    port: Number.parseInt(process.env.SMTP_PORT || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER || "user@example.com",
      pass: process.env.SMTP_PASSWORD || "password",
    },
  })
}

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      institution: formData.get("institution") as string,
      message: formData.get("message") as string,
    }

    // Validate form data
    const validatedData = emailSchema.parse(data)

    // Create email content
    const emailContent = {
      from: process.env.EMAIL_FROM || "noreply@successguide.com",
      to: process.env.EMAIL_TO || "contact@successguide.com",
      subject: `New Contact Form Submission from ${validatedData.firstName} ${validatedData.lastName}`,
      text: `
        Name: ${validatedData.firstName} ${validatedData.lastName}
        Email: ${validatedData.email}
        Institution: ${validatedData.institution}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Institution:</strong> ${validatedData.institution}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
      `,
    }

    // Send email
    const transporter = createTransporter()
    await transporter.sendMail(emailContent)

    return { success: true, message: "Your message has been sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your form inputs.",
        errors: error.errors.map((e) => ({ path: e.path[0], message: e.message })),
      }
    }

    return { success: false, message: "Failed to send your message. Please try again later." }
  }
}
