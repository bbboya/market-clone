const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
    //글쓰기 완료하면 다시 원래 화면으로 이동.
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener("submit", handleSubmitForm);
