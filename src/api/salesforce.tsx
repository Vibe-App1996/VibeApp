import axios from "axios";

const GET_VIBES_URL = "https://orgfarm-bc5ca8ede1-dev-ed.develop.my.salesforce-sites.com/services/apexrest/getVibes";
const ADD_VIBE_URL = "https://orgfarm-bc5ca8ede1-dev-ed.develop.my.salesforce-sites.com/services/apexrest/updateVibe"

// interface VibeList {
//   vibes: VibeItem[];
// }

// interface VibeItem {
//     name: string
//     amount: number;
// }



export default interface VibeResponse {
  name: string;
  amount: number;
}

interface Items {
  items: VibeResponse[];
}

export async function getVibes(): Promise<VibeResponse[]> {
  try {
    const response = await axios.get<Items>(
      GET_VIBES_URL,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Axios response", response);
    return response.data.items;
  } catch (error: any) {
      console.log("Trouble converting response")
      const errorItem: VibeResponse = {
        amount: 1,
        name: "Error"
      };
      const errorResponse = [
        errorItem
      ]
      return errorResponse
    }
}


export interface Vibe {
  vibeName: string 
}

export async function addVibe(vibe: Vibe) {
  try {
    const response = await axios.post(
      ADD_VIBE_URL,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {"vibeName": vibe.vibeName},
      }
    );
    return response.data;
  } catch (error: any) {

  }

}

