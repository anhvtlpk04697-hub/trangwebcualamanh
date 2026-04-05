// Demo: click tin tức sẽ hiện alert
document.querySelectorAll(".news-item").forEach(item => {
  item.addEventListener("click", () => {
    alert("Bạn vừa click vào tin!");
  });
});