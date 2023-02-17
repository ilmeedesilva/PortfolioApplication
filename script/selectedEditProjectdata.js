const editRowIMGUploder = document.querySelector(
  ".popup_form .image_wrapper input"
);

const editRowHeader = document.querySelector(
  '.popup_form input[name="edit_project_header"]'
);
const editRowDate = document.querySelector(
  '.popup_form input[name="edit_project_date"]'
);
const editRowDesc = document.querySelector(
  '.popup_form textarea[name="edit_project_dec"]'
);
const editRowDeletBtn = document.querySelector(
  ".popup_form .pop_up_edit_save_cancel_wrapper .primary_btn"
);

const selectedEditProjectdata = (project, type) => {// me tiyene ara api anith js file eke click event eke call karapu function eke
  let editimageEncoded = project.image;//project kiyala parameter eke iyene oya btn eke click kara welawe loop eke tibba row eke values tika/ img eke save karanan baha ne db eke images widiyata. eke base69 form eketa save wenne eka api encoded karala aphu image ekak karanna tama oya logic eke gahala tiyenne
  let editimage =
    '<img src="data:image/jpeg;base64,' + editimageEncoded + '"/>';

  document.querySelector(".image_wrapper .img_box").innerHTML = editimage;//me eke gihin api set karala image eke set karanna one element eketa

  document.querySelector(".popup_form_wrapper").classList.remove("hide");

  editRowIMGUploder.style.display = "block";
  document.querySelector(".popup_form .image_wrapper p").style.display =
    "block";
  editRowHeader.readOnly = false;//me samahra fields readOnly false karala tiyeen api delete eke dith me modal ekamai penna ne eke edit karanan baha ne fields. dan edit ekedi ewa readonly tiyana one habai eke read only tiyala meketa eddit meke edit karanan baha ne. etha kota edit btn eke click aradi ara read only thibba fields false karanwa
  editRowDate.readOnly = false;
  editRowDesc.readOnly = false;

  editRowHeader.value = project.projectName;// me input fields walata value assign karal ara project eken apu
  editRowDate.value = project.date;
  editRowDesc.value = project.descr;

  editRowDeletBtn.classList.remove("delete_btn");//save delete btn dekatama tiyane 1 btn ekai man delete eke di delete_btn kiyal class ekak add kara eke styling karanna one nisa eke meke di rewmove kara
  editRowDeletBtn.innerHTML = "SAVE";// delete eke di save eke deete kiyala tiyene eke meke maru kara
  editRowDeletBtn.addEventListener("click", (e) =>
    handleEditProject(e, project, type)// me tiyene a btn eke event eke 
  );
};

const uploadedEditProjectImg = document.querySelector(".uploader_edit_project");
const uploadedEditProjectImgError = document.querySelector(
  ".uploader_edit_project_error"
);

uploadedEditProjectImg.addEventListener("change", function () {
  if (uploadedEditProjectImg.files.length === 0) {
    uploadedEditProjectImgError.innerHTML = "No file selected";
    return;
  }

  const file = uploadedEditProjectImg.files[0];

  if (file.size > 1048576) {
    uploadedEditProjectImgError.innerHTML = "File size exceeds 1MB";
    return;
  }

  if (!/^image\/(jpe?g|png)$/i.test(file.type)) {
    uploadedEditProjectImgError.innerHTML = "File type must be JPG or PNG";
    return;
  }
  uploadedEditProjectImgError.innerHTML = "";
});

const handleEditProject = (e, project, type) => {//edit eke di karana validation me tiyene uda save btn eke click karama
  const newHeaderError = document.querySelector(
    ".edit_project_header_error_txt"
  );
  const newDateError = document.querySelector(".edit_project_create_date");
  const newDescError = document.querySelector(".edit_project_dec");

  e.preventDefault();

  // check date is valid


  // mata mongal wageh :(, meeting noda kiyana amarui. raata kiyla denawada. mn krnnm ethakota. mata therenneh na meh js ekeh kiyapuwa :( earphone wath nath da? baaaaa ahnna baa. meh yka enawa saren sarehh!!!!! ha ehenam . man giya bye
  const selectedDate = new Date(editRowDate.value);
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    console.log("Input date is in the future");
    newDateError.innerHTML = "Invalid Date";
  }
  if (editRowDate.value) {
    newDateError.innerHTML = "Date cannont be empty";
  } else {
    newDateError.innerHTML = "";
  }
  if (editRowHeader.value.length < 10) {
    newHeaderError.innerHTML =
      "Project Title must have more than 10 characters";
  } else {
    newHeaderError.innerHTML =
      "Project Title must have more than 10 characters";
  }
  if (editRowDesc.value.length < 20) {
    newDescError.innerHTML =
      "Project description must have more than 20 characters";
  } else {
    newDescError.innerHTML = "";
  }

  const editImageEncoded = project.image;
  const file = uploadedEditProjectImg.files[0]; // add this line to retrieve the uploaded file

  if (file instanceof Blob) {
    const reader = new FileReader();
    console.log(file);
    reader.onload = function (event) {
      if (event.target.result === editImageEncoded) {
        uploadedEditProjectImgError.innerHTML =
          "uploaded image same as original";
        return;
      } else {
        uploadedEditProjectImgError.innerHTML = "";
      }

      const editHeader = editRowHeader.value.trim();
      const editDate = editRowDate.value.trim();
      const editDesc = editRowDesc.value.trim();

      if (
        editHeader === project.projectName.trim() &&
        editDate === project.date &&
        editDesc === project.descr.trim()
      ) {
        alert(
          "Please fill all fields and make sure they are different from the original data"
        );
        return;
      }

      const data = new FormData();
      data.append("project_id", project.id);
      data.append("image", editRowIMGUploder.files[0]);
      data.append("project_name", editHeader);
      data.append("date", editDate);
      data.append("descr", editDesc);

      fetch("../../db/putProjectData.php", {
        method: "POST",
        body: data,
      })
        .then((response) => {
          if (response.status === 200) {
            alert("Data saved successfully");
          } else {
            alert("Failed to save data");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("Failed to save data");
        });
    };
    reader.readAsDataURL(file);
  }
};
