import axios from "axios";

const SALESFORCE_URL = "https://orgfarm-bc5ca8ede1-dev-ed.develop.my.salesforce-sites.com/services/apexrest/getVibes";

interface VibeList {
  vibes: VibeItem[];
}

interface VibeItem {
    name: string
    amount: number;
}

export async function getVibes() {
  try {
    const response = await axios.get(
      SALESFORCE_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Lead created:", response.data);
    return response.data;
  } catch (error: any) {
    console.error("❌ Error sending to Salesforce:", error.response?.data || error.message);
    throw error;
  }
}

