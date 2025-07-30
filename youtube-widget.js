//single video play
// document.addEventListener("DOMContentLoaded", function () {
//   const scriptTag = document.getElementById("uf-youtube-script");
//   if (!scriptTag) return;

//   const youtubeId = scriptTag.getAttribute("data-video-id") || "dQw4w9WgXcQ";

//   // Create the YouTube player widget
//   const widget = document.createElement("div");
//   widget.id = "youtube-widget";
//   widget.style.width = "300px";
//   widget.style.height = "300px";
//   widget.style.position = "fixed";
//   widget.style.top = "50%";
//   widget.style.right = "20px";
//   widget.style.transform = "translateY(-50%)";
//   widget.style.backgroundColor = "#000";
//   widget.style.border = "1px solid #ccc";
//   widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//   widget.style.zIndex = "99999";
//   widget.style.borderRadius = "12px";
//   widget.style.overflow = "hidden";
//   widget.style.transition = "opacity 0.5s ease";
//   widget.style.opacity = "0";

//   widget.innerHTML = `
//     <div style="position: relative; width: 100%; height: 100%;">
//       <iframe
//         src="https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0"
//         frameborder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//         allowfullscreen
//         title="YouTube Player"
//         style="width: 100%; height: 100%; border-radius: 12px;"
//       ></iframe>
//       <button id="close-youtube-widget"
//         style="
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: rgba(0, 0, 0, 0.6);
//           color: #fff;
//           border: none;
//           border-radius: 50%;
//           width: 32px;
//           height: 32px;
//           font-size: 18px;
//           cursor: pointer;
//           line-height: 32px;
//           text-align: center;
//           transition: background 0.3s ease, color 0.3s ease;
//         ">&times;</button>
//     </div>
//   `;

//   document.body.appendChild(widget);

//   requestAnimationFrame(() => {
//     widget.style.opacity = "1";
//   });

//   // Add hover effect via JS (optional fallback if no CSS)
//   const closeBtn = widget.querySelector("#close-youtube-widget");
//   closeBtn.addEventListener("mouseenter", () => {
//     closeBtn.style.background = "transparent";
//     closeBtn.style.color = "#000";
//   });
//   closeBtn.addEventListener("mouseleave", () => {
//     closeBtn.style.background = "rgba(0, 0, 0, 0.6)";
//     closeBtn.style.color = "#fff";
//   });

//   // Reopen button
//   const reopenBtn = document.createElement("button");
//   reopenBtn.id = "reopen-youtube-widget";
//   reopenBtn.innerHTML = `<i class="fab fa-youtube"></i>`;
//   reopenBtn.style.position = "fixed";
//   reopenBtn.style.top = "50%";
//   reopenBtn.style.right = "20px";
//   reopenBtn.style.transform = "translateY(-50%)";
//   reopenBtn.style.width = "60px";
//   reopenBtn.style.height = "60px";
//   reopenBtn.style.borderRadius = "50%";
//   reopenBtn.style.backgroundColor = "#ff0000";
//   reopenBtn.style.color = "#fff";
//   reopenBtn.style.border = "none";
//   reopenBtn.style.fontSize = "24px";
//   reopenBtn.style.zIndex = "99998";
//   reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//   reopenBtn.style.cursor = "pointer";
//   reopenBtn.style.display = "none";

//   document.body.appendChild(reopenBtn);

//   // Close behavior
//   closeBtn.addEventListener("click", () => {
//     widget.style.opacity = "0";
//     setTimeout(() => {
//       widget.style.display = "none";
//       reopenBtn.style.display = "block";
//     }, 300);
//   });

//   // Reopen behavior
//   reopenBtn.addEventListener("click", () => {
//     widget.style.display = "flex";
//     requestAnimationFrame(() => {
//       widget.style.opacity = "1";
//     });
//     reopenBtn.style.display = "none";
//   });
// });


//multiple video play

// document.addEventListener("DOMContentLoaded", function () {
//   const scriptTag = document.getElementById("uf-youtube-script");
//   if (!scriptTag) return;

//   const videoIdsRaw = scriptTag.getAttribute("data-video-ids") || "dQw4w9WgXcQ";
//   const videoIds = videoIdsRaw.split(",").map(v => v.trim());
//   const mainVideo = videoIds[0];
//   const playlist = videoIds.slice(1).join(",");

//   // Create the YouTube player widget
//   const widget = document.createElement("div");
//   widget.id = "youtube-widget";
//   widget.style.width = "300px";
//   widget.style.height = "300px";
//   widget.style.position = "fixed";
//   widget.style.top = "50%";
//   widget.style.right = "20px";
//   widget.style.transform = "translateY(-50%)";
//   widget.style.backgroundColor = "#000";
//   widget.style.border = "1px solid #ccc";
//   widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//   widget.style.zIndex = "99999";
//   widget.style.borderRadius = "12px";
//   widget.style.overflow = "hidden";
//   widget.style.transition = "opacity 0.5s ease";
//   widget.style.opacity = "0";

//   const iframeSrc = playlist
//     ? `https://www.youtube.com/embed/${mainVideo}?autoplay=1&playlist=${playlist}&rel=0`
//     : `https://www.youtube.com/embed/${mainVideo}?autoplay=1&rel=0`;

//   widget.innerHTML = `
//     <div style="position: relative; width: 100%; height: 100%;">
//       <iframe
//         src="${iframeSrc}"
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen
//         style="width: 100%; height: 100%; border-radius: 12px;"
//       ></iframe>
//       <button id="close-youtube-widget"
//         style="
//           position: absolute;
//           top: 10px;
//           right: 10px;
//           background: rgba(0, 0, 0, 0.6);
//           color: #fff;
//           border: none;
//           border-radius: 50%;
//           width: 32px;
//           height: 32px;
//           font-size: 18px;
//           cursor: pointer;
//           line-height: 32px;
//           text-align: center;
//           transition: background 0.3s ease, color 0.3s ease;
//         ">&times;</button>
//     </div>
//   `;

//   document.body.appendChild(widget);

//   requestAnimationFrame(() => {
//     widget.style.opacity = "1";
//   });

//   const closeBtn = widget.querySelector("#close-youtube-widget");
//   closeBtn.addEventListener("mouseenter", () => {
//     closeBtn.style.background = "#fff";
//     closeBtn.style.color = "#000";
//   });
//   closeBtn.addEventListener("mouseleave", () => {
//     closeBtn.style.background = "rgba(0, 0, 0, 0.6)";
//     closeBtn.style.color = "#fff";
//   });

//   // Reopen button
//   const reopenBtn = document.createElement("button");
//   reopenBtn.id = "reopen-youtube-widget";
//   reopenBtn.innerHTML = `<i class="fab fa-youtube"></i>`;
//   reopenBtn.style.position = "fixed";
//   reopenBtn.style.top = "50%";
//   reopenBtn.style.right = "20px";
//   reopenBtn.style.transform = "translateY(-50%)";
//   reopenBtn.style.width = "60px";
//   reopenBtn.style.height = "60px";
//   reopenBtn.style.borderRadius = "50%";
//   reopenBtn.style.backgroundColor = "#ff0000";
//   reopenBtn.style.color = "#fff";
//   reopenBtn.style.border = "none";
//   reopenBtn.style.fontSize = "24px";
//   reopenBtn.style.zIndex = "99998";
//   reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//   reopenBtn.style.cursor = "pointer";
//   reopenBtn.style.display = "none";

//   document.body.appendChild(reopenBtn);

//   closeBtn.addEventListener("click", () => {
//     widget.style.opacity = "0";
//     setTimeout(() => {
//       widget.style.display = "none";
//       reopenBtn.style.display = "block";
//     }, 300);
//   });

//   reopenBtn.addEventListener("click", () => {
//     widget.style.display = "flex";
//     requestAnimationFrame(() => {
//       widget.style.opacity = "1";
//     });
//     reopenBtn.style.display = "none";
//   });
// });

//adjested size single video 
// document.addEventListener("DOMContentLoaded", function () {
//   const scriptTag = document.getElementById("uf-youtube-script");
//   if (!scriptTag) return;

//   const youtubeId = scriptTag.getAttribute("data-video-id") || "dQw4w9WgXcQ";

//   // Create responsive widget container
//   const widget = document.createElement("div");
//   widget.id = "youtube-widget";
//   widget.style.position = "fixed";
//   widget.style.top = "50%";
//   widget.style.right = "20px";
//   widget.style.transform = "translateY(-50%)";
//   widget.style.zIndex = "99999";
//   widget.style.borderRadius = "12px";
//   widget.style.overflow = "hidden";
//   widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
//   widget.style.maxWidth = "300px";
//   widget.style.maxHeight = "300px";
//   widget.style.aspectRatio = "16 / 9";
//   widget.style.transition = "opacity 0.5s ease";
//   widget.style.opacity = "0";

//   widget.innerHTML = `
//     <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
//       <iframe
//         src="https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0"
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen
//         style="
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           border: none;
//           border-radius: 12px;
//         "
//       ></iframe>
//       <button id="close-youtube-widget"
//         style="
//           position: absolute;
//           top: 8px;
//           right: 8px;
//           background: rgba(0,0,0,0.6);
//           color: white;
//           border: none;
//           border-radius: 50%;
//           width: 36px;
//           height: 36px;
//           font-size: 20px;
//           cursor: pointer;
//           transition: background 0.3s ease, color 0.3s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         ">&times;</button>
//     </div>
//   `;

//   document.body.appendChild(widget);

//   requestAnimationFrame(() => {
//     widget.style.opacity = "1";
//   });

//   const closeBtn = widget.querySelector("#close-youtube-widget");
//   closeBtn.addEventListener("mouseenter", () => {
//     closeBtn.style.background = "#fff";
//     closeBtn.style.color = "#000";
//   });
//   closeBtn.addEventListener("mouseleave", () => {
//     closeBtn.style.background = "rgba(0, 0, 0, 0.6)";
//     closeBtn.style.color = "#fff";
//   });

//   // Reopen button
//   const reopenBtn = document.createElement("button");
//   reopenBtn.id = "reopen-youtube-widget";
//   reopenBtn.innerHTML = `<i class="fab fa-youtube"></i>`;
//   reopenBtn.style.position = "fixed";
//   reopenBtn.style.top = "50%";
//   reopenBtn.style.right = "20px";
//   reopenBtn.style.transform = "translateY(-50%)";
//   reopenBtn.style.width = "60px";
//   reopenBtn.style.height = "60px";
//   reopenBtn.style.borderRadius = "50%";
//   reopenBtn.style.backgroundColor = "#ff0000";
//   reopenBtn.style.color = "#fff";
//   reopenBtn.style.border = "none";
//   reopenBtn.style.fontSize = "24px";
//   reopenBtn.style.zIndex = "99998";
//   reopenBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//   reopenBtn.style.cursor = "pointer";
//   reopenBtn.style.display = "none";

//   document.body.appendChild(reopenBtn);

//   // Close behavior
//   closeBtn.addEventListener("click", () => {
//     widget.style.opacity = "0";
//     setTimeout(() => {
//       widget.style.display = "none";
//       reopenBtn.style.display = "block";
//     }, 300);
//   });

//   // Reopen behavior
//   reopenBtn.addEventListener("click", () => {
//     widget.style.display = "block";
//     requestAnimationFrame(() => {
//       widget.style.opacity = "1";
//     });
//     reopenBtn.style.display = "none";
//   });
// });


document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.getElementById("uf-youtube-script");
  if (!scriptTag) return;

  const idsRaw = scriptTag.getAttribute("data-video-ids") || "dQw4w9WgXcQ";
  const ids = idsRaw.split(",").map(id => id.trim());
  const mainVideo = ids[0];
  const playlist = ids.slice(1).join(",");

  const iframeSrc = playlist
    ? `https://www.youtube.com/embed/${mainVideo}?autoplay=1&playlist=${playlist}&rel=0`
    : `https://www.youtube.com/embed/${mainVideo}?autoplay=1&rel=0`;

  const widget = document.createElement("div");
  widget.id = "youtube-widget";
  widget.style.position = "fixed";
  widget.style.top = "50%";
  widget.style.right = "20px";
  widget.style.transform = "translateY(-50%)";
  widget.style.zIndex = "99999";
  widget.style.borderRadius = "12px";
  widget.style.overflow = "hidden";
  widget.style.boxShadow = "0 6px 20px rgba(0, 0, 0, 0.2)";
  widget.style.maxWidth = "300px";
  widget.style.maxHeight = "300px";
  widget.style.aspectRatio = "16 / 9";
  widget.style.transition = "opacity 0.5s ease";
  widget.style.opacity = "0";

  widget.innerHTML = `
    <div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
      <iframe
        src="${iframeSrc}"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 12px;"
      ></iframe>
      <button id="close-youtube-widget"
        style="
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(0,0,0,0.6);
          color: white;
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          font-size: 20px;
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        ">&times;</button>
    </div>
  `;

  document.body.appendChild(widget);
  requestAnimationFrame(() => {
    widget.style.opacity = "1";
  });

  const closeBtn = widget.querySelector("#close-youtube-widget");
  closeBtn.addEventListener("mouseenter", () => {
    closeBtn.style.background = "#fff";
    closeBtn.style.color = "#000";
  });
  closeBtn.addEventListener("mouseleave", () => {
    closeBtn.style.background = "rgba(0,0,0,0.6)";
    closeBtn.style.color = "#fff";
  });

  // Reopen button
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

  closeBtn.addEventListener("click", () => {
    widget.style.opacity = "0";
    setTimeout(() => {
      widget.style.display = "none";
      reopenBtn.style.display = "block";
    }, 300);
  });

  reopenBtn.addEventListener("click", () => {
    widget.style.display = "block";
    requestAnimationFrame(() => {
      widget.style.opacity = "1";
    });
    reopenBtn.style.display = "none";
  });
});



