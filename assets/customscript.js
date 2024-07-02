// Open the modal with image and description
function openModal(imageUrl, description) {
    var modal = document.getElementById("pModal");
    var modalImg = document.getElementById("modalImage");
    var modalDescription = document.getElementById("modalDescription");
  
    modal.style.display = "block";
    modalImg.src = imageUrl;
    modalDescription.textContent = description;
  }
  
  // Close the modal
  function closeModal() {
    var modal = document.getElementById("pModal");
    modal.style.display = "none";
  }
  
  // Close the modal when the user clicks outside of it
  window.onclick = function(event) {
    var modal = document.getElementById("pModal");
    if (event.target == modal) {
      closeModal();
    }
  };

  // Open the video modal with video and description
function openVModal(vidUrl, description) {

  var modal = document.getElementById("vModal");
  var modalVideo = document.querySelector("iframe");
  var modalDescription = document.getElementById("vmodalDescription");

  modal.style.display = "block";
  modalVideo.src = "https://" + vidUrl;
  modalDescription.textContent = description;
}

// Close the modal
function closeVModal() {
  var modal = document.getElementById("vModal");
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
  var modal = document.getElementById("pModal");
  if (event.target == modal) {
    closeModal();
  }
  var modal = document.getElementById("vModal");
  if (event.target == modal) {
    closeVModal();
  }
};
  
  