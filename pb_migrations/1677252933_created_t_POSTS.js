migrate((db) => {
  const collection = new Collection({
    "id": "842ebb246jo81vz",
    "created": "2023-02-24 15:35:33.433Z",
    "updated": "2023-02-24 15:35:33.433Z",
    "name": "t_POSTS",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q5yhexxe",
        "name": "header",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "emslsazu",
        "name": "body",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("842ebb246jo81vz");

  return dao.deleteCollection(collection);
})
