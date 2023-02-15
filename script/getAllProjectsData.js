const edittableBody = document.querySelector(".project_edit_table_body");
const deletetableBody = document.querySelector(".project_delete_table_body");

fetch("../../db/getAllProjects.php")
  .then((response) => response.json())
  .then((projects) => {
    projects.forEach((project) => {
      const delrow = deletetableBody.insertRow();
      const editrow = edittableBody.insertRow();

      delrow.insertCell().textContent = project.projectName;
      delrow.insertCell().textContent = project.descr;
      delrow.insertCell().textContent = project.date;

      editrow.insertCell().textContent = project.projectName;
      editrow.insertCell().textContent = project.descr;
      editrow.insertCell().textContent = project.date;

      const editBtn = document.createElement("button");
      editBtn.classList.add("control_btn", "edit_btn");
      editBtn.textContent = "Edit";
      editrow.insertCell().appendChild(editBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("control_btn", "delete_control", "delete_btn");
      deleteBtn.textContent = "Delete";
      delrow.insertCell().appendChild(deleteBtn);

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
  })
  .catch((error) => console.error(error));
