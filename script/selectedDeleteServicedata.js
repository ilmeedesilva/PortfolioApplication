const deleteIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input[name='serviceItemImgInput']"
);

// const imgUploadLabel = document.querySelector(".service_lb_img");

// const imgUploadInput = document.querySelector(
//   "Input[name='serviceItemImgInput']"
// );

const deleteTitle = document.querySelector('input[name="edit_title"]');

const deleteDescription = document.querySelector('textarea[name="edit_desc"]');
const deleteRowDeletServiceBtn = document.querySelector(
  ".pop_up_edit_save_cancel_wrapper .delete_edit_service_save"
);

let selectedServiceID;

const selectedDeleteServicedata = (service, type) => {
  selectedServiceID = service.id;
  let deleteimageEncoded = service.image;
  let deleteimage =
    '<img src="data:image/jpeg;base64,' + deleteimageEncoded + '"/>';

  document.querySelector(".image_wrapper .img_box").innerHTML = deleteimage;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  deleteIMGUploder.style.display = "none";
  document.querySelector(".popup_form .image_wrapper p").style.display = "none";
  document.querySelector(".group_lb_img_pos_ab").style.display = "none";

  imgUploadLabel.style.display = "none";
  imgUploadInput.style.display = "none";

  deleteTitle.readOnly = true;
  deleteDescription.readOnly = true;

  deleteTitle.value = service.serviceName;
  deleteDescription.value = service.descr;

  deleteRowDeletServiceBtn.classList.add("delete_btn");
  deleteRowDeletServiceBtn.innerHTML = "DELETE";
};

deleteRowDeletServiceBtn.addEventListener("click", () => {
  if (deleteRowDeletServiceBtn.textContent === "DELETE") {
    fetch("../../db/deleteServiceById.php", {
      method: "POST",
      body: JSON.stringify({ id: selectedServiceID }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Service deleted successfully!");
          getAllServicesData();
        } else {
          alert("Failed to delete service");
        }
      })
      .catch((error) => {
        alert(error);
      });

    document.querySelector(".popup_form_wrapper").classList.add("hide");
  }
});
