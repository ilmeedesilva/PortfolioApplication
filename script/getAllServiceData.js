const edittableBody = document.querySelector(".service_edit_table_body");

const getAllServicesData = () => {

  while (edittableBody.firstChild) {
    edittableBody.removeChild(edittableBody.firstChild);
  }

  fetch("../../db/getAllServices.php")
    .then((response) => response.json())
    .then((services) => {
      services.forEach((service) => {
        const editrow = edittableBody.insertRow();

        editrow.insertCell().textContent = service.title;
        editrow.insertCell().textContent = service.description;

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
          const selectedService = {
            title: service.title,
            description: service.description,
          };

          document
            .querySelector(".popup_form_wrapper")
            .classList.remove("hide");
          document.querySelector(".social_media_form_container").style.display =
            "none";
          document.querySelector(".services_form_wrapper").style.display =
            "block";
          selectedEditServicedata(selectedService, "Edit");//id eke pass wela na ne
        });

        deleteBtn.addEventListener("click", () => {
          document
          .querySelector(".popup_form_wrapper")
          .classList.remove("hide");
          const selectedService = {
            id:service.id,
            title: service.title,
            description: service.description,
          };
          document.querySelector(".social_media_form_container").style.display =
            "none";
          document.querySelector(".services_form_wrapper").style.display =
            "block";
          selectedDeleteServicedata(selectedService, "Delete");
        });
      });
    })
    .catch((error) => console.error(error));
};

getAllServicesData();
