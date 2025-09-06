"use server";

export async function submitContactForm(formData: FormData) {
  console.log(formData)
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const isSuccess = Math.random() > 0.1;

  return {
    success: isSuccess,
    message: isSuccess
      ? "Message sent successfully!"
      : "Failed to send message. Please try again.",
  };
}
