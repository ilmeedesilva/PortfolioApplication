const edittableBody = document.querySelector(".project_edit_table_body");
//const deletetableBody = document.querySelector(".project_delete_table_body");
const loadingPorjectData = () => {
  edittableBody.innerHTML = "Loading...";
};

const hideloadingPorjectData = () => {
  // const spinner = edittableBody.querySelector(".loading_tb");
  // if (spinner) {
  //   edittableBody.removeChild(spinner);
  // }
  edittableBody.innerHTML = "";
};

const getAllProjectsData = () => {
  while (edittableBody.firstChild) {
    edittableBody.removeChild(edittableBody.firstChild);
  }
  loadingPorjectData();
  isLoading(true);
  fetch("../../db/getAllProjects.php")
    .then((response) => {
      isLoading(false);
      return response.json();
    })
    .then((projects) => {
      hideloadingPorjectData();
      if (!projects) {
        edittableBody.innerHTML = "<p>No Data</p>";
      } else {
        projects.forEach((project) => {
          //const delrow = deletetableBody.insertRow();
          const editrow = edittableBody.insertRow();

          // delrow.insertCell().textContent = project.projectName;
          // delrow.insertCell().textContent = project.descr;
          // delrow.insertCell().textContent = project.date;

          editrow.insertCell().textContent = project.projectName;
          editrow.insertCell().textContent = project.descr;
          editrow.insertCell().textContent = project.date;

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
            const selectedProject = {
              id: project.id,
              projectName: project.projectName,
              descr: project.descr,
              date: project.date,
              image: project.image,
            };
            selectedEditProjectdata(selectedProject, "Edit");
          });

          deleteBtn.addEventListener("click", () => {
            const selectedProject = {
              id: project.id,
              projectName: project.projectName,
              descr: project.descr,
              date: project.date,
              image: project.image,
            };
            selectedDeleteProjectdata(selectedProject, "Delete");
          });
        });
      }
    })
    .catch((error) => {
      console.log("error - ", error);
      hideloadingPorjectData();
      edittableBody.innerHTML = "<p>Something went wrong</p>";
    });
};

getAllProjectsData();
