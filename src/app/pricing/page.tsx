// src/app/pricing/page.tsx
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
    {
        name: "Basic",
        description: "Essential design services for startups and small businesses",
        price: "$899",
        duration: "per project",
        features: [
            "Logo design (2 concepts)",
            "Business card design",
            "Basic brand guidelines",
            "Social media profile setup",
            "1 round of revisions",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Professional",
        description: "Comprehensive branding solutions for growing businesses",
        price: "$1,899",
        duration: "per project",
        features: [
            "Logo design (4 concepts)",
            "Complete brand identity",
            "Business card & stationery",
            "Comprehensive brand guidelines",
            "Social media kit",
            "Basic website design (5 pages)",
            "3 rounds of revisions",
            "30 days of support",
        ],
        cta: "Choose Plan",
        popular: true,
    },
    {
        name: "Enterprise",
        description: "Custom design solutions for established organizations",
        price: "$3,899",
        duration: "per project",
        features: [
            "Logo design (6 concepts)",
            "Comprehensive brand identity",
            "Complete stationery package",
            "Extensive brand guidelines",
            "Social media strategy & design",
            "Custom website design",
            "Marketing collateral design",
            "Unlimited revisions",
            "60 days of support",
            "Dedicated project manager",
        ],
        cta: "Contact Us",
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <div className="container py-12 px-4 mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Pricing Packages</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Choose the perfect package to bring your design vision to life
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan) => (
                    <Card
                        key={plan.name}
                        className={`flex flex-col h-full ${plan.popular ? "border-primary shadow-md relative" : ""
                            }`}
                    >
                        {plan.popular && (
                            <Badge className="absolute -top-2 right-6 px-3 py-1">
                                Most Popular
                            </Badge>
                        )}
                        <CardHeader>
                            <CardTitle className="text-2xl">{plan.name}</CardTitle>
                            <CardDescription>{plan.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="mb-6">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className="text-muted-foreground ml-2">{plan.duration}</span>
                            </div>
                            <ul className="space-y-3">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button
                                className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                                variant={plan.popular ? "default" : "outline"}
                            >
                                {plan.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            <div className="mt-16 bg-muted rounded-lg p-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-center">Need a custom solution?</h2>
                <p className="text-center mb-6">
                    We offer tailored design packages for unique projects and specific requirements.
                    Get in touch with our team to discuss your needs.
                </p>
                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}