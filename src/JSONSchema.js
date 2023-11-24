let common = {
  region: {
    title: "Choose a Region",
    type: "string",
    enum: ["us-east-1", "us-west-1"],
    enumNames: ["East Virginia", "EU(Ireland)"],
  },
  description: {
    title: "Description",
    type: "string"
  },
}

export const JSSchema = [
  {
    title: "Simple Storage Service (S3)",
    type: "object",
    "required": [
      "region",
      "description"
    ],
    properties: {
      ...common,

      "S3 Standard feature": {
        type: "object",
        title: "S3 Standard feature",
        "properties": {

          "The calculations below exclude Free Tier discounts.": {
            type: "object",
            title: "The calculations below exclude Free Tier discounts.",
            "properties": {
              "S3 Standard storage": {
                type: "integer"
              },
              "unit": {
                title: "Unit",
                type: "string",
                enum: ["GB", "TB"],
                enumNames: ["GB per month", "TB per month"],
              },
              "How will data be moved into S3 Standard?": {
                title: "How will data be moved into S3 Standard?",
                type: "string",
                enum: ["The specified amount of data is already stored in S3 Standard", "PUT, COPY, POST requests to S3 Standard"],
                enumNames: ["The specified amount of data is already stored in S3 Standard", "PUT, COPY, POST requests to S3 Standard"],
              },
              "PUT, COPY, POST, LIST requests to S3 Standard": {
                type: "string",

              },
              "GET, SELECT, and all other requests from S3 Standard": {
                type: "string",

              }
            }
          },

          "Data returned by S3 Select": {
            type: "object",
            title: "Data scanned by S3 Select",
            "properties": {
              "Value": {
                type: "integer"
              },
              "Unit": {
                type: "string",
                enum: ["GB", "TB"],
                enumNames: ["GB per month", "TB per month"],
              }
            }
          },
          "Data scanned by S3 Select": {
            type: "object",
            title: "Data scanned by S3 Select",
            "properties": {
              "Value": {
                type: "integer"
              },
              "Unit": {
                type: "string",
                enum: ["GB", "TB"],
                enumNames: ["GB per month", "TB per month"],
              }
            }
          },
        }
      },

      "Data Transfer feature": {
        "type": "object",
        title: "Data Transfer feature",
        "properties": {

          "Inbound Data Transfer": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "Data transfer from": {
                  "type": "string",
                  enum: ["internet_free", "region_free"],
                  enumNames: ["internet (free)", "all other region (free)"],
                },
                "Enter Amount": {
                  "type": "string"
                },
                "Data amount": {
                  "type": "string",
                  enum: ["GB", "TB"],
                  enumNames: ["GB per month", "TB per month"],
                }
              }
            }
          },
          "Outbound Data Transfer": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "Data transfer to": {
                  "type": "string",
                  enum: ["internet_free", "region_free"],
                  enumNames: ["internet (free)", "all other region (free)"],
                },
                "Enter Amount": {
                  "type": "string"
                },
                "Data amount": {
                  "type": "string",
                  enum: ["GB", "TB"],
                  enumNames: ["GB per month", "TB per month"],
                }
              }
            }
          },
        }
      },

    }
  },
  {
    title: "Amazon Lambda",
    type: "object",
    properties: {
      ...common,
      architecture: {
        title: "Architecture",
        type: "string",
        enum: ["x86", "arm"],
        enumNames: ["X86", "ARM"],
      }
    }
  },
  {
    title: "AWS Backup",
    type: "object",
    properties: {
      ...common,
      "EFS feature": {
        title: "EFS feature",
        type: "string",
        enum: ["x86", "arm"],
        enumNames: ["X86", "ARM"],
      },
      "Total EFS storage": {
        title: "Total EFS storage",
        type: "string",
        enum: ["x86", "arm"],
        enumNames: ["X86", "ARM"],
      }
    }
  },
]