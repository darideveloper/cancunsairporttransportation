import { create } from 'zustand';
import { z } from 'zod';

const contactSchema = z.object({
    client_full_name: z.string().min(1, "Name is required").max(75, "Name too long"),
    client_subject: z.string().min(1, "Subject is required").max(100, "Subject too long"),
    client_email: z.string().email("Invalid email address").max(85, "Email too long"),
    client_phone: z.string().min(1, "Phone is required").max(35, "Phone number too long"),
    client_message: z.string().min(1, "Message is required").max(200, "Message too long"),
});

interface ContactFormState {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;

    errors: Record<string, string>;
    isLoading: boolean;
    status: 'idle' | 'success' | 'error';
    errorMessage: string | null;

    setName: (val: string) => void;
    setEmail: (val: string) => void;
    setPhone: (val: string) => void;
    setSubject: (val: string) => void;
    setMessage: (val: string) => void;

    submitForm: () => Promise<void>;
    resetForm: () => void;
}

export const useContactFormStore = create<ContactFormState>((set, get) => ({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',

    errors: {},
    isLoading: false,
    status: 'idle',
    errorMessage: null,

    setName: (val) => set({ name: val, errors: { ...get().errors, name: '' } }),
    setEmail: (val) => set({ email: val, errors: { ...get().errors, email: '' } }),
    setPhone: (val) => set({ phone: val, errors: { ...get().errors, phone: '' } }),
    setSubject: (val) => set({ subject: val, errors: { ...get().errors, subject: '' } }),
    setMessage: (val) => set({ message: val, errors: { ...get().errors, message: '' } }),

    resetForm: () => set({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        errors: {},
        isLoading: false,
        status: 'idle',
        errorMessage: null
    }),

    submitForm: async () => {
        const { name, email, phone, subject, message } = get();

        // Map to API fields for validation
        const payload = {
            client_full_name: name,
            client_email: email,
            client_phone: phone,
            client_subject: subject,
            client_message: message,
        };

        const result = contactSchema.safeParse(payload);

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.errors.forEach(err => {
                // Map back to store field names
                const fieldMap: Record<string, string> = {
                    client_full_name: 'name',
                    client_email: 'email',
                    client_phone: 'phone',
                    client_subject: 'subject',
                    client_message: 'message'
                };
                const fieldName = err.path[0] as string;
                const storeField = fieldMap[fieldName] || fieldName;
                fieldErrors[storeField] = err.message;
            });
            set({ errors: fieldErrors });
            return;
        }

        set({ isLoading: true, errorMessage: null, errors: {} });

        try {
            const response = await fetch('/api/v1/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                if (response.status === 422) {
                    // Handle server-side validation errors if they return a specific format
                    // For now assume generic error or message in body
                    const data = await response.json().catch(() => ({}));
                    set({
                        status: 'error',
                        errorMessage: data.message || 'Validation failed. Please check your inputs.',
                        isLoading: false
                    });
                    return;
                }
                throw new Error(`Server error: ${response.status}`);
            }

            set({ status: 'success', isLoading: false });
            // Optional: reset form after success? The design doesn't specify, but usually good ux.
            // But maybe user wants to see "Message Sent" instead of cleared form.
            // I'll leave the data there and let UI handle "Success" screen.
        } catch (error: any) {
            set({
                status: 'error',
                errorMessage: error.message || 'An error occurred. Please try again.',
                isLoading: false
            });
        }
    },
}));
