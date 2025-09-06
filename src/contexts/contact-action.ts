//   const onSubmit = async (data: ContactFormData) => {
//     setIsSubmitting(true);
//     setSubmitStatus("idle");

//     try {
//       const response = await fetch(
//         "https://portifolio-api-b8bk.onrender.com/send-email",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: data.name,
//             email: data.email,
//             subject: data.subject,
//             message: data.message,
//           }),
//         }
//       );

//       if (response.ok) {
//         setSubmitStatus("success");
//         reset();
//       } else {
//         setSubmitStatus("error");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitStatus("error");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

import { ContactFormData } from "../types/types.type";

export async function submitContactForm(formData: FormData) {
  console.log(formData)
  const name = formData.get("name") as string;
  console.log(name)
}
