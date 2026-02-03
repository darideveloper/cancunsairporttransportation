export const prerender = false;

import type { APIRoute } from 'astro';
import { z } from 'zod';

const contactSchema = z.object({
    client_full_name: z.string().min(1),
    client_subject: z.string().min(1),
    client_email: z.string().email(),
    client_phone: z.string().min(1),
    client_message: z.string().min(1),
});

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json(); // Astro automatically handles JSON body parsing with request.json()

        const result = contactSchema.safeParse(body);

        if (!result.success) {
            return new Response(JSON.stringify({
                message: "Validation failed",
                errors: result.error.flatten()
            }), {
                status: 422,
                headers: { "Content-Type": "application/json" }
            });
        }

        // TODO: Integrate with Mailjet API
        // const { MAILJET_API_KEY, MAILJET_SECRET_KEY } = import.meta.env;
        console.log('Contact form submitted:', result.data);

        return new Response(JSON.stringify({ message: "Message sent successfully" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });

    } catch (error) {
        console.error('Error processing contact form:', error);
        return new Response(JSON.stringify({ message: "Internal server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
