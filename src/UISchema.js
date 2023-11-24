export const UISchema = {
  title: "Simple Storage Service (S3)",
  type: "object",
  required: ["region", "description"],
  properties: {
    // ...common,

    "S3 Standard feature": {
      type: "object",
      title: "S3 Standard feature",
      properties: {
        "The calculations below exclude Free Tier discounts.": {
          type: "object",
          title: "The calculations below exclude Free Tier discounts.",
          properties: {
            "S3 Standard storage": {
              type: "integer",
              title: "S3 Standard storage",
            },
            unit: {
              title: "Unit",
              type: "string",
              enum: ["GB", "TB"],
              enumNames: ["GB per month", "TB per month"],
            },
            "How will data be moved into S3 Standard?": {
              title: "How will data be moved into S3 Standard?",
              type: "string",
              enum: [
                "The specified amount of data is already stored in S3 Standard",
                "PUT, COPY, POST requests to S3 Standard",
              ],
              enumNames: [
                "The specified amount of data is already stored in S3 Standard",
                "PUT, COPY, POST requests to S3 Standard",
              ],
            },
            "PUT, COPY, POST, LIST requests to S3 Standard": {
              type: "string",
              title: "PUT, COPY, POST, LIST requests to S3 Standard",
            },
            "GET, SELECT, and all other requests from S3 Standard": {
              type: "string",
              title: "GET, SELECT, and all other requests from S3 Standard",
            },
          },
        },

        "Data returned by S3 Select": {
          type: "object",
          title: "Data returned by S3 Select",
          properties: {
            Value: {
              type: "integer",
              title: "Value",
            },
            Unit: {
              type: "string",
              enum: ["GB", "TB"],
              enumNames: ["GB per month", "TB per month"],
              title: "Unit",
            },
          },
        },

        "Data scanned by S3 Select": {
          type: "object",
          title: "Data scanned by S3 Select",
          properties: {
            Value: {
              type: "integer",
              title: "Value",
            },
            Unit: {
              type: "string",
              enum: ["GB", "TB"],
              enumNames: ["GB per month", "TB per month"],
              title: "Unit",
            },
          },
        },
      },
    },

    "Data Transfer feature": {
      type: "object",
      title: "Data Transfer feature",
      properties: {
        "Inbound Data Transfer": {
          type: "array",
          items: {
            type: "object",
            properties: {
              "Data transfer from": {
                type: "string",
                enum: ["internet_free", "region_free"],
                enumNames: ["internet (free)", "all other region (free)"],
                title: "Data transfer from",
              },
              "Enter Amount": {
                type: "string",
                title: "Enter Amount",
              },
              "Data amount": {
                type: "string",
                enum: ["GB", "TB"],
                enumNames: ["GB per month", "TB per month"],
                title: "Data amount",
              },
            },
          },
        },
        "Outbound Data Transfer": {
          type: "array",
          items: {
            type: "object",
            properties: {
              "Data transfer to": {
                type: "string",
                enum: ["internet_free", "region_free"],
                enumNames: ["internet (free)", "all other region (free)"],
                title: "Data transfer to",
              },
              "Enter Amount": {
                type: "string",
                title: "Enter Amount",
              },
              "Data amount": {
                type: "string",
                enum: ["GB", "TB"],
                enumNames: ["GB per month", "TB per month"],
                title: "Data amount",
              },
            },
          },
        },
      },
    },
  },
};

// export default UISchema;
// export const UISchema = [

//   {
//     title: "Simple Storage Service (S3)",
//     "type": "VerticalLayout",
//     "elements": [
//       {
//         "type": "Control",
//         "scope": "#/properties/comments",
//         "options": {
//           "showSortButtons": true
//         }
//       }
//     ],
//     // storagesize: {
//     //   "ui:col": 3,
//     // },
//     // type: {
//     //   "ui:col": 3,
//     // },
//     // "ui:group-storagesize-type": {
//     //   "ui:widget": "custom",
//     // },
//   }
// ]