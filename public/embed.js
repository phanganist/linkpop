(function () {
    console.log("✅ embed.js is executing");
  
    const urlParams = new URLSearchParams(window.location.search);
    const instanceId = urlParams.get("instanceId");
    const secret = "YOUR_APP_SECRET"; // Keep this safe – ideally move to Firebase Functions if possible
  
    if (!instanceId || !isInstanceValid(instanceId, secret)) {
      console.warn("❌ Invalid or missing instance ID");
      return;
    }
  
    if (window.location.pathname === "/settings") return;
  
    let settings = {
      label: "Click Me",
      link: "https://example.com",
      color: "#007bff",
      position: "bottom-right",
      ...JSON.parse(localStorage.getItem("linkpop-settings") || "{}")
    };
  
    const button = document.createElement("button");
    button.textContent = settings.label;
    button.style.position = "fixed";
    button.style.zIndex = "9999";
    button.style.backgroundColor = settings.color;
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "12px 18px";
    button.style.borderRadius = "20px";
    button.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.2)";
    button.style.cursor = "pointer";
  
    const setPosition = (pos) => {
      const positions = {
        "bottom-right": { bottom: "20px", right: "20px" },
        "bottom-left": { bottom: "20px", left: "20px" },
        "top-right": { top: "20px", right: "20px" },
        "top-left": { top: "20px", left: "20px" }
      };
      Object.assign(button.style, positions[pos] || positions["bottom-right"]);
    };
  
    setPosition(settings.position);
  
    button.onclick = () => window.open(settings.link, "_blank");
    document.body.appendChild(button);
  
    window.addEventListener("message", (event) => {
      if (event.data?.type === "settings-updated") {
        const newSettings = event.data.data;
        localStorage.setItem("linkpop-settings", JSON.stringify(newSettings));
        button.textContent = newSettings.label;
        button.style.backgroundColor = newSettings.color;
        setPosition(newSettings.position);
        button.onclick = () => window.open(newSettings.link, "_blank");
      }
    });
  
    // Validate instance
    function isInstanceValid(instance, secret) {
      const [payload, signature] = instance.split(".");
      const hash = CryptoJS.HmacSHA256(payload, secret);
      const base64Hash = CryptoJS.enc.Base64.stringify(hash);
      return base64Hash === signature;
    }
  })();
  