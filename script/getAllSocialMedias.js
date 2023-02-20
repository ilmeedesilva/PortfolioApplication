const socialMediaModifyTBBody = document.querySelector(
  ".social_media_modify_table_body"
);

const getAllSocialMedias = () => {
  while (socialMediaModifyTBBody.firstChild) {
    socialMediaModifyTBBody.removeChild(socialMediaModifyTBBody.firstChild);
  }

  fetch("../../db/getAllSocialMedias.php")
    .then((response) => response.json())
    .then((medias) => {
      medias.forEach((media) => {
        if (window.location.href.includes("admin")) {
          const editrow = socialMediaModifyTBBody.insertRow();

          editrow.insertCell().textContent = media.socialMediaLinkName;
          editrow.insertCell().textContent = media.socialMediaLink;

          const editBtn = document.createElement("button");
          editBtn.classList.add("editt_btn");
          const deleteBtn = document.createElement("button");
          deleteBtn.classList.add("deletee_btn");

          const btndiv = document.createElement("div");
          btndiv.classList.add("btn_wrapper");
          btndiv.appendChild(editBtn);
          btndiv.appendChild(deleteBtn);
          editrow.insertCell().appendChild(btndiv);

          editBtn.addEventListener("click", () => {
            const selectedUser = {
              id: media.id,
              name: media.socialMediaLinkName,
              link: media.socialMediaLink,
              image: media.image,
            };

            document
              .querySelector(".popup_form_wrapper")
              .classList.remove("hide");

            selectedSocialMediaEditData(selectedUser, "Edit");
          });

          deleteBtn.addEventListener("click", () => {
            const selectedUser = {
              id: media.id,
              name: media.socialMediaLinkName,
              link: media.socialMediaLink,
              image: media.image,
            };
            selectedSocialMediaDeleteData(selectedUser, "Delete");
          });
        } else {
          // Get the parent element
          const parentElement = document.querySelector(
            ".footer_content_social_icons"
          );

          const anchorTag = document.createElement("a");
          anchorTag.href = media.socialMediaLink;
          parentElement.appendChild(anchorTag);

          var imageEncoded = media.image;

          const imageTag = document.createElement("img");
          imageTag.src = "data:image/jpeg;base64," + imageEncoded;
          imageTag.alt = media.socialMediaLinkName;
          anchorTag.appendChild(imageTag);
        }
      });
    })
    .catch((error) => console.error(error));
};

getAllSocialMedias();
