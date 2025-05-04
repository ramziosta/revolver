import { Layout } from "@/components/layout/layout";

function TermsOfService() {
    return (
        <Layout>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
            <p className="mb-4">Effective Date: <strong>01-01-2025</strong></p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Services Offered</h2>
            <p className="mb-4">
                Revolver by Umami offers restaurant reservations, catering, and
                subscriptions, subject to availability.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. Eligibility</h2>
            <p className="mb-4">You must be at least 18 or have parental consent.</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Orders & Subscriptions</h2>
            <p className="mb-4">
                By ordering or subscribing, you agree to pay associated fees and
                authorize recurring payments. Subscriptions auto-renew unless canceled.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Cancellations & Refunds</h2>
            <p className="mb-4">
                Restaurant: 12hr notice. Catering: 48hr notice. Subscriptions can be
                canceled anytime. Refunds are discretionary.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. User Conduct</h2>
            <p className="mb-4">
                Don’t use the site for illegal activities or post offensive content.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Intellectual Property</h2>
            <p className="mb-4">
                All content is property of Revolver by Umami. Do not reproduce without
                consent.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Disclaimers</h2>
            <p className="mb-4">
                Services are provided "as is." We don’t guarantee availability or
                suitability for every dietary need.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Limitation of Liability</h2>
            <p className="mb-4">
                We are not liable for indirect or incidental damages.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
            <p className="mb-4">
                Governed by the laws of [Your Country]. Disputes resolved in [City]
                courts.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">10. Changes to Terms</h2>
            <p className="mb-4">
                Terms may change. Continued use of our services implies acceptance.
            </p>

            <p className="mt-6">Contact us at: <strong>umamiamman@gmail.com</strong></p>
        </div>
        </Layout>
    );
}
export default TermsOfService;