(async () => {
  try {
    const response = await fetch("http://127.0.0.1:4000/", {
      method: "GET",
      credentials: "include"   // ✅ Must include this to send/receive cookies
    });

    // If server sends JSON
    const data = await response.json();
    console.log("Response data:", data);
    
    // Check if cookies are stored
    console.log("Cookies from document.cookie:", document.cookie);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
})();
