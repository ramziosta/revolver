import { Layout } from "@/components/layout/layout";
function PrivacyPolicy() {
    return (
        <Layout>
        <div className="container mx-auto px-4 py-10 max-w-3xl">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
                Effective Date: <strong>01-01-2025</strong>
            </p>
            <p className="mb-4">
                At <strong>Revolver by Umami</strong>, we are committed to protecting your
                privacy. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                We may collect personal information such as your name, email, phone
                number, billing details, and subscription preferences. Automatically
                collected data includes IP address, browser type, and pages visited.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
            <p className="mb-4">
                We use this information to process orders, send updates, improve
                experiences, and comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
            <p className="mb-4">
                We do not sell your data. We may share information with payment
                processors, delivery services, and legal authorities as needed.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies</h2>
            <p className="mb-4">
                We use cookies to enhance site performance. You may disable them in
                your browser.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
            <p className="mb-4">
                You may access, correct, or delete your data. Contact us at
                hello@revolverbyumami.com.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">6. Security</h2>
            <p className="mb-4">
                We use encryption and secure servers to protect your data.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">7. Children's Privacy</h2>
            <p className="mb-4">
                We do not knowingly collect information from children under 13.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Policy</h2>
            <p className="mb-4">
                Updates will be posted here with a revised effective date.
            </p>
        </div>
        </Layout>
    );
}

export default PrivacyPolicy;
