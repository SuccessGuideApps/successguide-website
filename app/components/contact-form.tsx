"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "../actions/send-email"
import { useFormStatus } from "react-dom"

type FormError = {
  path: string | number
  message: string
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3" disabled={pending}>
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [formState, setFormState] = useState<{
    message?: string
    success?: boolean
    errors?: FormError[]
  }>({})

  async function handleSubmit(formData: FormData) {
    const result = await sendContactEmail(formData)
    setFormState(result)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  return (
    <Card className="shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl text-gray-800">Send us a Message</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {formState.message && (
          <div
            className={`p-4 rounded-md ${formState.success ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}
          >
            {formState.message}
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="firstName">
                First Name
              </label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="John"
                required
                aria-invalid={formState.errors?.some((e) => e.path === "firstName")}
                aria-describedby={formState.errors?.some((e) => e.path === "firstName") ? "firstName-error" : undefined}
              />
              {formState.errors?.find((e) => e.path === "firstName") && (
                <p id="firstName-error" className="mt-1 text-sm text-red-600">
                  {formState.errors.find((e) => e.path === "firstName")?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="lastName">
                Last Name
              </label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Doe"
                required
                aria-invalid={formState.errors?.some((e) => e.path === "lastName")}
                aria-describedby={formState.errors?.some((e) => e.path === "lastName") ? "lastName-error" : undefined}
              />
              {formState.errors?.find((e) => e.path === "lastName") && (
                <p id="lastName-error" className="mt-1 text-sm text-red-600">
                  {formState.errors.find((e) => e.path === "lastName")?.message}
                </p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              required
              aria-invalid={formState.errors?.some((e) => e.path === "email")}
              aria-describedby={formState.errors?.some((e) => e.path === "email") ? "email-error" : undefined}
            />
            {formState.errors?.find((e) => e.path === "email") && (
              <p id="email-error" className="mt-1 text-sm text-red-600">
                {formState.errors.find((e) => e.path === "email")?.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="institution">
              Institution Name
            </label>
            <Input
              id="institution"
              name="institution"
              placeholder="Your School/College Name"
              required
              aria-invalid={formState.errors?.some((e) => e.path === "institution")}
              aria-describedby={
                formState.errors?.some((e) => e.path === "institution") ? "institution-error" : undefined
              }
            />
            {formState.errors?.find((e) => e.path === "institution") && (
              <p id="institution-error" className="mt-1 text-sm text-red-600">
                {formState.errors.find((e) => e.path === "institution")?.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your requirements..."
              className="min-h-[120px]"
              required
              aria-invalid={formState.errors?.some((e) => e.path === "message")}
              aria-describedby={formState.errors?.some((e) => e.path === "message") ? "message-error" : undefined}
            />
            {formState.errors?.find((e) => e.path === "message") && (
              <p id="message-error" className="mt-1 text-sm text-red-600">
                {formState.errors.find((e) => e.path === "message")?.message}
              </p>
            )}
          </div>
          <SubmitButton />
        </form>
      </CardContent>
    </Card>
  )
}
