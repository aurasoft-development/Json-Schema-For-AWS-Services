export const definitions = {
    "definitions": {
      "Region": {
        "title": "Region",
        "type": "string",
        "anyOf": [
          {
            "type": "string",
            "enum": [
              "#ff0000"
            ],
            "title": "Red"
          },
          {
            "type": "string",
            "enum": [
              "#00ff00"
            ],
            "title": "Green"
          },
          {
            "type": "string",
            "enum": [
              "#0000ff"
            ],
            "title": "Blue"
          }
        ]
      },
      "Toggle": {
        "title": "Toggle",
        "type": "boolean",
        "oneOf": [
          {
            "title": "Enable",
            "const": true
          },
          {
            "title": "Disable",
            "const": false
          }
        ]
      }
    }
}