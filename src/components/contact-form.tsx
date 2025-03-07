// src/components/contact-form.tsx
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

const ContactForm = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Select>
                        <SelectTrigger id="subject">
                            <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="project">Project Inquiry</SelectItem>
                            <SelectItem value="collaboration">Collaboration</SelectItem>
                            <SelectItem value="freelance">Freelance Work</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell me about your project or inquiry..." className="min-h-32" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full bg-orange-600">Send Message</Button>
            </CardFooter>
        </Card>
    );
};

export default ContactForm;