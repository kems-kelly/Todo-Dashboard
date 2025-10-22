(function () {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.getElementById("hamburger");
  const appRoot = document.getElementById("appRoot");

  function openSidebar() {
    sidebar.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeSidebar() {
    sidebar.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    if (sidebar.classList.contains("open")) closeSidebar();
    else openSidebar();
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth <= 720) {
      if (
        !sidebar.contains(e.target) &&
        !hamburger.contains(e.target) &&
        sidebar.classList.contains("open")
      ) {
        closeSidebar();
      }
    }
  });

  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      navItems.forEach((n) => {
        n.classList.remove("active");
        n.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      if (window.innerWidth <= 720) closeSidebar();
    });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && sidebar.classList.contains("open"))
      closeSidebar();
  });

  function onResize() {
    if (window.innerWidth > 720) {
      sidebar.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
  window.addEventListener("resize", onResize);
})();
