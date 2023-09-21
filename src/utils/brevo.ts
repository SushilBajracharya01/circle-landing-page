import { IContactFormProps, IContactProps } from "../types";
import { APP_EMAIL, EMAIL_TEMPLATE_IDS, SENDER_EMAIL } from "./constants";

const BREVO_API_URL = "https://api.brevo.com/v3";

/**
 *
 */
async function createContact(bodyParams: IContactProps) {
    await fetch(`${BREVO_API_URL}/contacts`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            "api-key": import.meta.env.VITE_BREVO_API_KEY ?? "",
        },
        body: JSON.stringify(bodyParams),
    });
}

async function sendEmail(bodyParams: IContactFormProps) {
    const emailTemplateId = EMAIL_TEMPLATE_IDS.CONTACTED_US; // default template id

    await fetch(`${BREVO_API_URL}/smtp/email`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json",
            "api-key": import.meta.env.VITE_BREVO_API_KEY ?? "",
        },
        body: JSON.stringify({
            templateId: emailTemplateId,
            subject: bodyParams.SUBJECT || "Let's connect",
            sender: { name: "Circle", email: SENDER_EMAIL },
            to: [{ email: APP_EMAIL, name: "Sushil Bajracharya" }],
            params: bodyParams,
        }),
    });
}

export { createContact, sendEmail };