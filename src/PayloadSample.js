export default `{
  "data": {
    "type": "users",
    "id": "b358c1a4-516a-4e57-9d0d-a6dc7d2847d7",
    "attributes": {
      "role": "booker",
      "city": "New Denisefort",
      "streetName": "Timmy Key",
      "streetAddress": "94978 Sulema Club",
      "secondaryAddress": "Apt. 202",
      "firstName": "Herb",
      "last_name": "Lemke",
      "prefix": "Dr.",
      "currency": "UAH",
      "age": 84,
      "email": "johnsiehudson@fadel.name",
      "createdAt": "2019-07-27",
      "updatedAt": "2019-07-27"
    },
    "relationships": {
      "user_group": {
        "data": {
          "id": 1,
          "type": "user_groups"
        }
      },
      "comments": {
        "data": [
          {
            "type": "comments",
            "id": "3b86d18a-dd8c-4bae-8d7f-3c43c6a67bf5"
          },
          {
            "type": "comments",
            "id": "e8f3f38e-b9c8-4919-ae1e-5b5bef535319"
          }
        ]
      },
      "articles": {
        "data": [
          {
            "type": "articles",
            "method": "update",
            "id": "ef8d2384-1b1a-4f0a-95df-4d0100bb0731"
          },
          {
            "type": "articles",
            "method": "update",
            "id": "238ff404-0f7d-4239-b32a-69f34f6ccefd"
          }
        ]
      }
    }
  },
  "included": [
    {
      "id": "ef8d2384-1b1a-4f0a-95df-4d0100bb0731",
      "type": "articles",
      "attributes": {
        "wordCount": 106,
        "publishedAt": "2019-07-27",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      },
      "relationships": {
        "comments": {
          "data": [
            {
              "type": "comments",
              "method": "update",
              "id": "1615fa9d-c04f-4ec4-8380-6106ed24be80"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "3b695293-f8f9-40d0-b824-46998778225c"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "21b20bb2-fd4c-48f8-92bb-f02ee8b2856f"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "7451369d-e31f-42a0-8cd8-2b7e0ce3a53c"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "c1dccf6e-0af7-48b4-a557-ec08fc5b9ba7"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "88a42201-bbfe-46ef-a08b-3fa3b2084d18"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "2e45bb10-7a79-427b-be91-9c28a5840009"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "02dd740c-8d1e-40ee-b085-fed672d15cb9"
            }
          ]
        }
      }
    },
    {
      "id": "238ff404-0f7d-4239-b32a-69f34f6ccefd",
      "type": "articles",
      "attributes": {
        "wordCount": 333,
        "publishedAt": "2019-07-29",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      },
      "relationships": {
        "comments": {
          "data": [
            {
              "type": "comments",
              "method": "update",
              "id": "94573b5e-c610-4bbc-b7d9-ef75675a9dcd"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "6bbbedc5-43f2-4202-884f-7ad531ce7790"
            },
            {
              "type": "comments",
              "method": "update",
              "id": "c7b0bde6-31ae-4c94-81c5-268e133e5b83"
            }
          ]
        }
      }
    },
    {
      "id": 1,
      "type": "user_groups",
      "attributes": {
        "name": "Zita Smitham",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      },
      "relationships": {
        "users": {
          "data": [
            {
              "type": "users",
              "method": "update",
              "id": "1b00fbd4-867f-4706-aa39-52defc7a187b"
            },
            {
              "type": "users",
              "method": "update",
              "id": "9474c435-84c2-468c-bc1e-c8563bd813c4"
            },
            {
              "type": "users",
              "method": "update",
              "id": "d3553a79-383a-47f0-a83b-9039ccf4af8e"
            },
            {
              "type": "users",
              "method": "update",
              "id": "42887430-2015-42a6-a15a-033be6bfe75a"
            },
            {
              "type": "users",
              "method": "update",
              "id": "5cdab84e-4451-48ba-9059-927c80248e30"
            },
            {
              "type": "users",
              "method": "update",
              "id": "26177444-b1c3-4471-b21c-c4408d0fefdb"
            },
            {
              "type": "users",
              "method": "update",
              "id": "cdcec8b8-823c-4e9e-b53a-881662e9048e"
            },
            {
              "type": "users",
              "method": "update",
              "id": "bae306a3-5a4d-4777-a8b8-9d02646f8c25"
            },
            {
              "type": "users",
              "method": "update",
              "id": "7a32f17b-b0c2-445e-9a28-125c0a3f7ee9"
            },
            {
              "type": "users",
              "method": "update",
              "id": "1a30aa82-a275-40cf-a087-82b4bc3cd34b"
            },
            {
              "type": "users",
              "method": "update",
              "id": "f3b3742b-864a-4718-9553-97ba56665226"
            },
            {
              "type": "users",
              "method": "update",
              "id": "9b7c1551-6f8b-45d9-af20-29e6e8a67e51"
            },
            {
              "type": "users",
              "method": "update",
              "id": "f2c2cd75-1366-4539-868c-446472503871"
            },
            {
              "type": "users",
              "method": "update",
              "id": "fb378a42-3975-4560-a4a6-fcfc67f700df"
            },
            {
              "type": "users",
              "method": "update",
              "id": "26bbb797-1254-45e0-931b-615b3786bfef"
            }
          ]
        }
      }
    },
    {
      "type": "users",
      "id": "1b00fbd4-867f-4706-aa39-52defc7a187b",
      "attributes": {
        "role": "general",
        "city": "Lockmanfort",
        "streetName": "Armstrong Keys",
        "streetAddress": "571 Ja Village",
        "secondaryAddress": "Apt. 139",
        "firstName": "Analisa",
        "last_name": "Gaylord",
        "prefix": "Ms.",
        "currency": "USD",
        "age": 26,
        "email": "verniamraz@hermann.biz",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "users",
      "id": "9474c435-84c2-468c-bc1e-c8563bd813c4",
      "attributes": {
        "role": "booker",
        "city": "Port Lorystad",
        "streetName": "Odette Cove",
        "streetAddress": "33218 Jaskolski Parks",
        "secondaryAddress": "Apt. 348",
        "firstName": "Morris",
        "last_name": "Klocko",
        "prefix": "Ms.",
        "currency": "EUR",
        "age": 47,
        "email": "stanleyparker@treutel.org",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "d3553a79-383a-47f0-a83b-9039ccf4af8e",
      "attributes": {
        "role": "general",
        "city": "Lake Milton",
        "streetName": "Lynch Views",
        "streetAddress": "7719 Crist Valleys",
        "secondaryAddress": "Apt. 831",
        "firstName": "Werner",
        "last_name": "Maggio",
        "prefix": "Dr.",
        "currency": "USD",
        "age": 57,
        "email": "nickrippin@satterfield.info",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "users",
      "id": "42887430-2015-42a6-a15a-033be6bfe75a",
      "attributes": {
        "role": "root",
        "city": "West Gennachester",
        "streetName": "Denny Plaza",
        "streetAddress": "43594 Hamill Street",
        "secondaryAddress": "Apt. 701",
        "firstName": "Allie",
        "last_name": "Von",
        "prefix": "Mr.",
        "currency": "EUR",
        "age": 38,
        "email": "leighaarmstrong@bahringer.com",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "users",
      "id": "5cdab84e-4451-48ba-9059-927c80248e30",
      "attributes": {
        "role": "booker",
        "city": "Mylesstad",
        "streetName": "Trevor Hills",
        "streetAddress": "29535 Shaniqua Square",
        "secondaryAddress": "Apt. 821",
        "firstName": "Treva",
        "last_name": "Johnston",
        "prefix": "Miss",
        "currency": "UAH",
        "age": 30,
        "email": "zitahane@leuschke.info",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "users",
      "id": "26177444-b1c3-4471-b21c-c4408d0fefdb",
      "attributes": {
        "role": "root",
        "city": "West Bartview",
        "streetName": "Ileen Loaf",
        "streetAddress": "198 Yundt Union",
        "secondaryAddress": "Suite 604",
        "firstName": "Araceli",
        "last_name": "Gulgowski",
        "prefix": "Mrs.",
        "currency": "UAH",
        "age": 31,
        "email": "mohammadhauck@hane.com",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "cdcec8b8-823c-4e9e-b53a-881662e9048e",
      "attributes": {
        "role": "root",
        "city": "Reynoldsland",
        "streetName": "Will Underpass",
        "streetAddress": "39722 Smitham Village",
        "secondaryAddress": "Apt. 267",
        "firstName": "Nigel",
        "last_name": "Ankunding",
        "prefix": "Miss",
        "currency": "USD",
        "age": 75,
        "email": "willena@bauch.name",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "users",
      "id": "bae306a3-5a4d-4777-a8b8-9d02646f8c25",
      "attributes": {
        "role": "general",
        "city": "West Brandonbury",
        "streetName": "Johnathon Mountains",
        "streetAddress": "59180 Nikolaus Mall",
        "secondaryAddress": "Suite 413",
        "firstName": "Luke",
        "last_name": "Stracke",
        "prefix": "Mrs.",
        "currency": "EUR",
        "age": 25,
        "email": "huong@heel.com",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "7a32f17b-b0c2-445e-9a28-125c0a3f7ee9",
      "attributes": {
        "role": "manager",
        "city": "New Derek",
        "streetName": "Hudson Parkways",
        "streetAddress": "739 Kuphal Hill",
        "secondaryAddress": "Apt. 164",
        "firstName": "Pearle",
        "last_name": "Stark",
        "prefix": "Mrs.",
        "currency": "USD",
        "age": 46,
        "email": "lorenzohoppe@grimes.co",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "users",
      "id": "1a30aa82-a275-40cf-a087-82b4bc3cd34b",
      "attributes": {
        "role": "manager",
        "city": "Sydneyport",
        "streetName": "Delois Fall",
        "streetAddress": "30176 Wilkinson Pike",
        "secondaryAddress": "Suite 454",
        "firstName": "Adell",
        "last_name": "Rolfson",
        "prefix": "Dr.",
        "currency": "EUR",
        "age": 18,
        "email": "kimberlee@johnson.info",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "f3b3742b-864a-4718-9553-97ba56665226",
      "attributes": {
        "role": "general",
        "city": "New Jeffryfurt",
        "streetName": "Torphy Drives",
        "streetAddress": "24231 Wiegand Glens",
        "secondaryAddress": "Apt. 456",
        "firstName": "Lakesha",
        "last_name": "Auer",
        "prefix": "Dr.",
        "currency": "EUR",
        "age": 33,
        "email": "juniorschmeler@quigley.co",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "9b7c1551-6f8b-45d9-af20-29e6e8a67e51",
      "attributes": {
        "role": "administrator",
        "city": "Lake Romeotown",
        "streetName": "Dylan Parks",
        "streetAddress": "762 Gleichner Crescent",
        "secondaryAddress": "Apt. 900",
        "firstName": "Edward",
        "last_name": "Marquardt",
        "prefix": "Dr.",
        "currency": "EUR",
        "age": 78,
        "email": "houston@gutkowski.net",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "f2c2cd75-1366-4539-868c-446472503871",
      "attributes": {
        "role": "administrator",
        "city": "Emmerichville",
        "streetName": "Monty Pine",
        "streetAddress": "586 Alec Forest",
        "secondaryAddress": "Suite 978",
        "firstName": "Nicolas",
        "last_name": "Bruen",
        "prefix": "Miss",
        "currency": "USD",
        "age": 24,
        "email": "arnold@carter.io",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "users",
      "id": "fb378a42-3975-4560-a4a6-fcfc67f700df",
      "attributes": {
        "role": "administrator",
        "city": "Port Janfurt",
        "streetName": "Olin Port",
        "streetAddress": "6092 Lachelle Harbors",
        "secondaryAddress": "Suite 948",
        "firstName": "Keiko",
        "last_name": "Murphy",
        "prefix": "Mr.",
        "currency": "UAH",
        "age": 28,
        "email": "colbyharber@halvorson.io",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "users",
      "id": "26bbb797-1254-45e0-931b-615b3786bfef",
      "attributes": {
        "role": "booker",
        "city": "East Carleymouth",
        "streetName": "Shantay Meadows",
        "streetAddress": "3175 Monahan Ports",
        "secondaryAddress": "Suite 942",
        "firstName": "Luis",
        "last_name": "Frami",
        "prefix": "Mr.",
        "currency": "USD",
        "age": 44,
        "email": "vanianienow@ritchie.io",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "comments",
      "id": "3b86d18a-dd8c-4bae-8d7f-3c43c6a67bf5",
      "attributes": {
        "text": "Quaerat rerum incidunt veritatis.",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "comments",
      "id": "e8f3f38e-b9c8-4919-ae1e-5b5bef535319",
      "attributes": {
        "text": "Commodi id et harum.",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "1615fa9d-c04f-4ec4-8380-6106ed24be80",
      "attributes": {
        "text": "Consequatur ea aut tempora.",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "comments",
      "id": "3b695293-f8f9-40d0-b824-46998778225c",
      "attributes": {
        "text": "Sequi aut rerum a.",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "21b20bb2-fd4c-48f8-92bb-f02ee8b2856f",
      "attributes": {
        "text": "Minima nemo eligendi voluptatem.",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "7451369d-e31f-42a0-8cd8-2b7e0ce3a53c",
      "attributes": {
        "text": "Soluta perspiciatis ut aut.",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "c1dccf6e-0af7-48b4-a557-ec08fc5b9ba7",
      "attributes": {
        "text": "Accusamus sed doloribus et.",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-28"
      }
    },
    {
      "type": "comments",
      "id": "88a42201-bbfe-46ef-a08b-3fa3b2084d18",
      "attributes": {
        "text": "Ex tempore illo dignissimos.",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "comments",
      "id": "2e45bb10-7a79-427b-be91-9c28a5840009",
      "attributes": {
        "text": "Dolores alias et reiciendis.",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "02dd740c-8d1e-40ee-b085-fed672d15cb9",
      "attributes": {
        "text": "Quo modi odit deleniti.",
        "createdAt": "2019-07-27",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "comments",
      "id": "94573b5e-c610-4bbc-b7d9-ef75675a9dcd",
      "attributes": {
        "text": "Ea et qui quo.",
        "createdAt": "2019-07-28",
        "updatedAt": "2019-07-29"
      }
    },
    {
      "type": "comments",
      "id": "6bbbedc5-43f2-4202-884f-7ad531ce7790",
      "attributes": {
        "text": "Nostrum repudiandae atque unde.",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-27"
      }
    },
    {
      "type": "comments",
      "id": "c7b0bde6-31ae-4c94-81c5-268e133e5b83",
      "attributes": {
        "text": "Facilis culpa eaque est.",
        "createdAt": "2019-07-29",
        "updatedAt": "2019-07-28"
      }
    }
  ]
}`;
