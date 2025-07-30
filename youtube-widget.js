document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("uf-youtube-script");
  if (!scriptTag) return;

  const youtubeId = scriptTag.getAttribute("data-video-id") || "dQw4w9WgXcQ"; // default fallback

  // Create the YouTube player widget
  const widget = document.createElement("div");
  widget.id = "youtube-widget";
  widget.style.width = "300px";
  widget.style.height = "300px";
  widget.style.position = "fixed";
  widget.style.top = "50%";
  widget.style.right = "20px";
  widget.style.transform = "translateY(-50%)";
  widget.style.backgroundColor = "#000";
  widget.style.border = "1px solid #ccc";
  widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  widget.style.zIndex = "99999";
  widget.style.borderRadius = "12px";
  widget.style.overflow = "hidden";
  widget.style.display = "flex";
  widget.style.flexDirection = "column";
  widget.style.justifyContent = "space-between";
  widget.style.transition = "opacity 0.5s ease";
  widget.style.opacity = "0";

  widget.innerHTML = `
    <iframe
      width="100%"
      height="260"
      src="https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      title="YouTube Player"
      style="border-radius: 12px 12px 0 0;"
    ></iframe>
    <button id="close-youtube-widget" class="btn btn-sm btn-danger" style="border-radius: 0 0 12px 12px; margin: 0;">Close</button>
  `;

  document.body.appendChild(widget);

  requestAnimationFrame(() => {
    widget.style.opacity = "1";
  });

  // Create a circular reopen button
  const reopenBtn = document.createElement("button");
  reopenBtn.id = "reopen-youtube-widget";
  reopenBtn.innerHTML = `<i class="fab fa-youtube"></i>`;
  reopenBtn.style.position = "fixed";
  reopenBtn.style.top = "50%";
  reopenBtn.style.right = "20px";
  reopenBtn.style.transform = "translateY(-50%)";
  reopenBtn.style.width = "60px";
  reopenBtn.style.height = "60px";
  reopenBtn.style.borderRadius = "50%";
  reopenBtn.style.backgroundColor = "#ff0000";
  reopenBtn.style.color = "#fff";
  reopenBtn.style.border = "none";
  reopenBtn.style.fontSize = "24px";
  reopenBtn.style.zIndex = "99998";
  reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
  reopenBtn.style.cursor = "pointer";
  reopenBtn.style.display = "none";

  document.body.appendChild(reopenBtn);

  // Close functionality
  widget.querySelector("#close-youtube-widget").addEventListener("click", () => {
    widget.style.opacity = "0";
    setTimeout(() => {
      widget.style.display = "none";
      reopenBtn.style.display = "block";
    }, 300);
  });

  // Reopen functionality
  reopenBtn.addEventListener("click", () => {
    widget.style.display = "flex";
    requestAnimationFrame(() => {
      widget.style.opacity = "1";
    });
    reopenBtn.style.display = "none";
  });
});
