import { redirect } from "next/navigation";

// The Netflix premiere event projects (Wake Up Dead Man, Frankenstein,
// Happy Gilmore 2) are no longer behind a password — they live in the main
// /work index now. This page just forwards anyone with the old bookmark.
export default function PrivatePage() {
  redirect("/work");
}
