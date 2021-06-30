        //define url

        export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/song`;

        //create our config object (sort of like our airtable passport)

        export const config = {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
          }
        };

        