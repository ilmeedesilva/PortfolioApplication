const edittableBody = document.querySelector(".service_edit_table_body");

const getAllServicesData = () => {
  if (edittableBody.hasChildNodes()) {
    edittableBody.innerHTML = "";
  }
  fetch("../../db/getAllServices.php")
    .then((response) => response.json())
    .then((services) => {
      edittableBody.innerHTML = "";
      services.forEach((service) => {
        const editrow = edittableBody.insertRow();

        editrow.insertCell().textContent = service.serviceName;
        editrow.insertCell().textContent = service.descr;

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
          deletBtnEditRow.setAttribute("data-id", service.id);
          const selectedService = {
            id: service.id,
            serviceName: service.serviceName,
            descr: service.descr,
            image: service.image,
          };

          document
            .querySelector(".popup_form_wrapper")
            .classList.remove("hide");
          document.querySelector(".social_media_form_container").style.display =
            "none";
          document.querySelector(".services_form_wrapper").style.display =
            "block";
          selectedEditServicedata(selectedService, "Edit");
        });

        deleteBtn.addEventListener("click", () => {
          document
            .querySelector(".popup_form_wrapper")
            .classList.remove("hide");
          const selectedService = {
            id: service.id,
            serviceName: service.serviceName,
            descr: service.descr,
            image: service.image,
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
