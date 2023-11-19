The logs routes define the API endpoints for indexing and searching logs. These routes are protected, requiring user authentication and admin privileges.

In all APIs, you have to pass the accessToken in the header of the request you got while logging in for authorization.

Ingest a New Log:

URL: POST http://localhost:3000/logs/index

Description: Add new Logs to the dataset.

Sample Request: POST http://localhost:3000/logs/index

Example :

Sample Input Body { "indexName": "sunday_logs", "logDataArray": [ { "timestamp": "2023-09-15T10:00:00Z", "level": "error", "message": "Failed to complete the function 2", "resourceId": "server-1235", "traceId": "abc-xyz-124", "spanId": "span-987", "commit": "5e5342a", "metadata": { "parentResourceId": "server-0987" } } ] }

Returned Object : { "errors": false, "took": 70, "items": [ { "index": { "_index": "sunday_logs", "_id": "GHHe54sBocmRxC7w9foB", "_version": 1, "result": "created", "_shards": { "total": 2, "successful": 1, "failed": 0 }, "_seq_no": 6, "_primary_term": 2, "status": 201 } } ] }

Search a Record:

URL: GET http://localhost:3000/logs/search

Description: Search a/multiple record from the dataset.

Sample Request:

GET http://localhost:3000/logs/search

Sample Input Body if we only want to search with a field { "indexName": "sunday_logs", "fieldsToSearch": [ { "fieldName": "level", "fieldValue": "error" } ] }

Sample Input Body if we only want to search with the combination of fields and Timestamp { "indexName": "sunday_logs", "fieldsToSearch": [ { "fieldName": "level", "fieldValue": "error" } ] "timestampFilter": { "startTime": "2023-09-15T09:00:00Z", "endTime": "2023-09-15T10:00:00Z" } }

Returned Object : [ { "_index": "sunday_logs", "_id": "L-9P5osB6qYzKbs9Byk-", "_score": 1.2076393, "_source": { "timestamp": "2023-09-15T10:00:00Z", "level": "error", "message": "Failed to complete the function 2", "resourceId": "server-1235", "traceId": "abc-xyz-124", "spanId": "span-987", "commit": "5e5342a", "metadata": { "parentResourceId": "server-0987" } } }, { "_index": "sunday_logs", "_id": "MO9_5osB6qYzKbs9TCmP", "_score": 1.2076393, "_source": { "timestamp": "2023-09-15T10:00:00Z", "level": "error", "message": "Failed to complete the function 2", "resourceId": "server-1235", "traceId": "abc-xyz-124", "spanId": "span-987", "commit": "5e5342a", "metadata": { "parentResourceId": "server-0987" } } }, { "_index": "sunday_logs", "_id": "F3HX54sBocmRxC7wJfor", "_score": 1.2076393, "_source": { "timestamp": "2023-09-15T10:00:00Z", "level": "error", "message": "Failed to complete the function 2", "resourceId": "server-1235", "traceId": "abc-xyz-124", "spanId": "span-987", "commit": "5e5342a", "metadata": { "parentResourceId": "server-0987" } } }, { "_index": "sunday_logs", "_id": "GHHe54sBocmRxC7w9foB", "_score": 1.2076393, "_source": { "timestamp": "2023-09-15T10:00:00Z", "level": "error", "message": "Failed to complete the function 2", "resourceId": "server-1235", "traceId": "abc-xyz-124", "spanId": "span-987", "commit": "5e5342a", "metadata": { "parentResourceId": "server-0987" } } } ]
