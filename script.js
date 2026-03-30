const form = document.getElementById("form_container");
const edit = document.getElementById("edit_form");
const btn = document.getElementById("pdf_generate_btn");
const cross = document.querySelector(".cross");
const downloadBtn = document.getElementById("download_pdf");


edit.addEventListener("click", () => {
  form.style.display = "flex";
});

if (cross) {
  cross.addEventListener("click", () => {
    form.style.display = "none";
  });
}


btn.addEventListener("click", () => {
  generateCoverPage();
  form.style.display = "none";
});

function generateCoverPage() {
  const fields = [
    ["page_title_input", "page_title_output"],
    ["student_dept_input", "dept_title"],
    ["course_title_input", "course_title_output"],
    ["course_code_input", "course_code_output"],
    ["teacher_name_input", "teacher_name_output"],
    ["teacher_designation_input", "teacher_designation_output"],
    ["teacher_dept_input", "teacher_dept_output"],
    ["student_name_input", "student_name_output"],
    ["student_id_input", "student_id_output"],
    ["student_batch_input", "student_batch_output"],
    ["student_dept_input", "student_dept_output"],
  ];

  fields.forEach(([inputId, outputId]) => {
    const input = document.getElementById(inputId);
    const output = document.getElementById(outputId);

    if (input && output) {
      output.innerText = input.value;
    }
  });
}


downloadBtn.addEventListener("click", downloadCoverPage);

function downloadCoverPage() {
  const element = document.getElementById("cover");

  html2pdf()
    .set({
      margin: 0,
      filename: "cover_page.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
      },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak: { mode: ["avoid-all", "css", "legacy"] },
    })
    .from(element)
    .save();
}