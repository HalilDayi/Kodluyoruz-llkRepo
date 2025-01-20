// Sayfa yüklendiğinde görevleri yükle
document.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTaskToDOM(task));
  });
  
  // "Ekle" butonuna tıklama olayını bağla
  document.getElementById("addTaskBtn").addEventListener("click", newElement);
  
  // Yeni görev ekleme
  function newElement() {
    const input = document.getElementById("task");
    const taskText = input.value.trim();
  
    if (taskText === "") {
      showToast("errorToast");
      return;
    }
  
    addTaskToDOM(taskText);
    saveTaskToLocalStorage(taskText);
  
    input.value = "";
    showToast("successToast");
  }
  
  // Görevi DOM'a ekle
  function addTaskToDOM(taskText) {
    const list = document.getElementById("list");
  
    const li = document.createElement("li");
    li.textContent = taskText;
    li.className = "task-item";
    li.onclick = toggleTaskCompletion;
  
    const closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.className = "close";
    closeButton.onclick = deleteTask;
  
    li.appendChild(closeButton);
    list.appendChild(li);
  }
  
  // Görevi LocalStorage'a kaydet
  function saveTaskToLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Görevi sil
  function deleteTask(event) {
    const li = event.target.parentElement;
    const taskText = li.firstChild.textContent;
  
    li.remove();
    removeTaskFromLocalStorage(taskText);
  }
  
  // LocalStorage'dan sil
  function removeTaskFromLocalStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = tasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }
  
  // Görev tamamlama
  function toggleTaskCompletion(event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    }
  }
  
  // Toast bildirimleri
  function showToast(toastId) {
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  
