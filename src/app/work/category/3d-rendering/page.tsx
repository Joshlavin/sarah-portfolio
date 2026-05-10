import { redirect } from "next/navigation";

// Old category slug. Renamed to "3d-visualization" — this just keeps any
// older links working.
export default function Old3DRenderingCategory() {
  redirect("/work/category/3d-visualization");
}
