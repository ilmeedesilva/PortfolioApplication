const deleteRowIMGUploder = document.querySelector(
  ".popup_form .uploader_edit_social_media_icon"
);

const deleteRowSocialLinkName = document.querySelector(
  '.popup_form input[name="edit_social_media_name"]'
);

const deleteRowSocialLink = document.querySelector(
  '.popup_form input[name="edit_social_media_link"]'
);
const deleteRowDeletBtn = document.querySelector(
  ".popup_form .delete_social_media_save"
);

let selectedID;

const selectedSocialMediaDeleteData = (social, type) => {
  console.log("social - ", social);
  selectedID = social.id;
  let deleteimageEncoded = social.image;
  let deleteimage =
    '<img src="data:image/jpeg;base64,' + deleteimageEncoded + '"/>';

  document.querySelector(".prev_social_img").innerHTML = deleteimage;

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  deleteRowIMGUploder.style.display = "none";
  document.querySelector(
    ".popup_form .uploader_edit_social_media_icon_error"
  ).style.display = "none";
  document.querySelector(".group_lb_img_pos_ab").style.display = "none";
  deleteRowSocialLinkName.readOnly = true;
  deleteRowSocialLink.readOnly = true;

  deleteRowSocialLinkName.value = social.name;
  deleteRowSocialLink.value = social.link;

  deleteRowDeletBtn.classList.add("delete_btn");
  deleteRowDeletBtn.innerHTML = "DELETE";
};

deleteRowDeletBtn.addEventListener("click", () => {
  if (deleteRowDeletBtn.textContent === "DELETE") {
    fetch("../../db/deleteSocialMediaById.php", {
      method: "POST",
      body: JSON.stringify({ id: selectedID }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Project deleted successfully!");
          getAllProjectsData();
        } else {
          alert("Failed to delete project");
          getAllProjectsData();
        }
      })
      .catch((error) => {
        alert(error);
      });

    document.querySelector(".popup_form_wrapper").classList.add("hide");
  }
});
