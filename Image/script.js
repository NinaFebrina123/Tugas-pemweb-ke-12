function displayImage() {
    let selectElement = document.getElementById("imageSelect");
    let selectedValue = selectElement.value;

    let imageContainer = document.getElementById("imageContainer");
    let displayedImage = document.getElementById("displayedImage");

    displayedImage.src = selectedValue;

   
    alert("Nama file gambar :  " + selectedValue);
}
