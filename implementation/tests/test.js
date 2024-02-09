import http from 'k6/http';
import { check } from 'k6';


export default async function () {
  // HAPPY PATH HIHI
  // 1. fetch your documents
  const docRes = http.get('http://localhost:3000/api/documents');
  check(docRes, {
    'fetch documents status is 200': (r) => r.status === 200,
  });
  // 2. create a new document
  const createRes = http.post('http://localhost:3000/api/documents', JSON.stringify({
    name: "Organization " + Math.floor(Math.random() * 100),
    companyId: 3145112,
    content: "Random content"
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  check(createRes, {
    'create document status is 201': (r) => r.status === 201,
  });
  let documentId = JSON.parse(createRes.body)['id'];
  if (documentId === undefined) {
    console.error("Error: documentId is undefined possibly duplicate ID exists");
    return;
  }
  // 3. modify the document
  const modRes = http.put(`http://localhost:3000/api/documents/${documentId}`, JSON.stringify({
    name: "Organization " + Math.floor(Math.random() * 100).toString(),
    content: "Random content UPDATED"
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  check(modRes, {
    'modify document status is 200': (r) => r.status === 200,
  });
  // 4. AssignToUserDocument
  const assignRes = http.post(`http://localhost:3000/api/documents/assign-user`, JSON.stringify({
    userId: 1,
    documentId
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  check(assignRes, {
    'assign document status is 201': (r) => r.status === 201,
  });
  // 5. Query the document
  const queryRes = http.get(`http://localhost:3000/api/documents/${documentId}`);
  check(queryRes, {
    'query document status is 200': (r) => r.status === 200,
  });
  // 6. Delete the document
  const delRes = http.del(`http://localhost:3000/api/documents/${documentId}`);
  check(delRes, {
    'delete document status is 200': (r) => r.status === 200,
  });

}
