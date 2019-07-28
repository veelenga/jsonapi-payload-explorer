export default `{
  "data": {
    "type": "articles",
    "attributes": {
      "title": "Sideposting with json:api"
    },
    "relationships": {
      "tags": {
        "data": [{ "type": "tags", "id": "9" },
                 { "type": "tags", "temp-id": "1" },
                 { "type": "tags", "temp-id": "2" }]
      }
    }
  },
  "included": [
    {
      "type": "tags",
      "temp-id": "1",
      "attributes": {
        "label": "JSON",
        "total": 42
      }
    },
    {
      "type": "tags",
      "temp-id": "2",
      "attributes": {
        "label": "REST"
      }
    }
  ]
}`;
