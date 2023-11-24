export const JSSchema = [
    {
        title: "Amazon Lambda",
        type: "object",
        properties: {
            region: {
                title: "Region",
                type: "string",
                enum: ["us-east-1", "us-west-1"],
                enumNames: ["East Virginia", "EU(Ireland)"],
            },
            architecture: {
                title: "Architecture",
                type: "string",
                enum: ["x86", "arm"],
                enumNames: ["X86", "ARM"],
            }

        }
    },
    {
        title: "Amazon Lambda",
        type: "object",
        properties: {
            region: {
                title: "Region",
                type: "string",
                enum: ["us-east-1", "us-west-1"],
                enumNames: ["East Virginia", "EU(Ireland)"],
            },
            architecture: {
                title: "Architecture",
                type: "string",
                enum: ["x86", "arm"],
                enumNames: ["X86", "ARM"],
            }

        }
    },
]

// export const JSSchema = {
//     "awss3":
//     {
//       "title": "Amazon Simple Storage Service",
//       "type": "object",
//       "properties": {
//         region: {
//           title: "Region",
//           type: "string",
//           enum: ["us-east-1", "us-west-1"],
//           enumNames: ["East Virginia", "EU(Ireland)"],
//           //   default: "us-east-1"
  
//         },
//         storagesize: {
//           title: "S3 Standard Storage(GB)",
//           type: "number",
//           minimum: 10
//         },
//         type: {
//           title: "Storage Type",
//           type: "string",
//           enum: ["standard", "standard-ai"],
//           enumNames: ["Standard", "Standard-AI"],
//           // default: "Standard"
//         }
//       }
//     },
//     "awslambda": {
//       title: "Amazon Lambda",
//       type: "object",
//       properties: {
//         region: {
//           title: "Region",
//           type: "string",
//           enum: ["us-east-1", "us-west-1"],
//           enumNames: ["East Virginia", "EU(Ireland)"],
//         },
//         architecture: {
//           title: "Architecture",
//           type: "string",
//           enum: ["x86", "arm"],
//           enumNames: ["X86", "ARM"],
//         }
  
//       }
//     },
//     "Simple Storage Service (S3)": {
//       title: "Amazon Lambda",
//       type: "object",
//       properties: {
//         region: {
//           title: "Region",
//           type: "string",
//           enum: ["us-east-1", "us-west-1"],
//           enumNames: ["East Virginia", "EU(Ireland)"],
//         },
//         architecture: {
//           title: "Architecture",
//           type: "string",
//           enum: ["x86", "arm"],
//           enumNames: ["X86", "ARM"],
//         }
  
//       }
//     }
//   }