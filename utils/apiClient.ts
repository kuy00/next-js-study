import ky from "ky";

const apiClient = ky.create({
  prefixUrl: process.env.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      (request) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(`before request - ${request}`);
        }
      },
    ],
    afterResponse: [
      (request, options, response) => {
        if (response.status === 401) {
          console.log(`after response - unauthorized`);
        }

        return response;
      },
    ],
  },
});

export default apiClient;
