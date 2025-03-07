// src/app/contact/page.tsx
import ContactForm from "@/components/contact-form";
import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
    title: "Contact | Design Portfolio",
    description: "Get in touch for project inquiries and collaborations.",
};

export default function ContactPage() {
    return (
        <div className="container px-4 py-12 mx-auto">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Me</h1>
                    <p className="text-xl text-muted-foreground">
                        Let&apos;s discuss your project and bring your ideas to life.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="h-12 w-12 rounded-full bg-orange-600/10 flex items-center justify-center mb-4">
                            <Mail className="h-6 w-6 text-orange-600" />
                        </div>
                        <h2 className="text-lg font-medium mb-2">Email</h2>
                        <p className="text-muted-foreground">hello@designstudio.com</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="h-12 w-12 rounded-full bg-orange-600/10 flex items-center justify-center mb-4">
                            <MapPin className="h-6 w-6 text-orange-600" />
                        </div>
                        <h2 className="text-lg font-medium mb-2">Location</h2>
                        <p className="text-muted-foreground">San Francisco, CA</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-4">
                        <div className="h-12 w-12 rounded-full bg-orange-600/10 flex items-center justify-center mb-4">
                            <Clock className="h-6 w-6 text-orange-600" />
                        </div>
                        <h2 className="text-lg font-medium mb-2">Working Hours</h2>
                        <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                </div>

                <ContactForm />
            </div>
        </div>
    );
}