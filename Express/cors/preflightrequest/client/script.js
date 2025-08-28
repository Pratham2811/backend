const response = fetch("http://localhost:4000/api/data", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer token123"
  },
  body: JSON.stringify({ msg: "Hello CORS!" })
})
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);



