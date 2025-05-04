import { Button } from "@/components/ui/button"


export default function OnceAWeekPlanPage() {


    const handleSubscribe = () => {

    }

    return (
        <>

            <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
                {/* Hero Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Once a Week Plan</h1>
                    <p className="text-lg text-muted-foreground">
                        Perfect for individuals or couples who want one fresh, chef-made meal delivered weekly.
                    </p>
                    <img
                        src="/images/once-a-week-hero.jpg"
                        alt="Delicious weekly meal"
                        className="rounded-2xl shadow-lg w-full max-h-96 object-cover"
                    />
                </section>

                {/* What's Included */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">What’s Included</h2>
                    <ul className="grid gap-3 text-base list-disc list-inside text-muted-foreground">
                        <li>1 fresh, chef-made meal per week</li>
                        <li>Serves 1–2 people</li>
                        <li>Zero prep — just heat and eat</li>
                        <li>Locally sourced ingredients</li>
                        <li>Cancel anytime</li>
                    </ul>
                </section>

                {/* Delivery & Packaging */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Delivery Details</h2>
                    <ul className="grid gap-3 text-base list-disc list-inside text-muted-foreground">
                        <li>Delivered weekly on your chosen day</li>
                        <li>Meals stay fresh for 3–5 days</li>
                        <li>Eco-friendly, recyclable packaging</li>
                    </ul>
                </section>

                {/* Pricing */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-lg font-medium text-foreground mb-1">$12.99 / week</p>
                    <p className="text-sm text-muted-foreground">First week 20% off</p>
                </section>

                {/* CTA */}
                <div className="text-center">
                    <Button size="lg" onClick={handleSubscribe}>
                        Get Started with Once-a-Week Plan
                    </Button>
                </div>

                {/* FAQ (Optional) */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                    <div className="space-y-3 text-muted-foreground">
                        <p><strong>Can I skip a week?</strong> Yes, you can skip or pause anytime.</p>
                        <p><strong>Can I cancel anytime?</strong> Absolutely — there’s no contract or hidden fees.</p>
                        <p><strong>What if I have allergies?</strong> Let us know in your preferences and we’ll do our best to accommodate.</p>
                    </div>
                </section>
            </main>
        </>
    )
}