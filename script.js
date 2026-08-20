const tryBtn = document.getElementById("try-btn");
const toast = document.getElementById("toast");
const toastClose = document.getElementById("toast-close");

tryBtn?.addEventListener("click", () => {
  toast?.showModal();
});

toastClose?.addEventListener("click", () => {
  toast?.close();
});

toast?.addEventListener("click", (event) => {
  if (event.target === toast) {
    toast.close();
  }
});
