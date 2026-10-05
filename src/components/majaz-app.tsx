"use client";

import { useEffect } from "react";
import { initMajaz, type MajazPage } from "@/lib/majaz";

export default function MajazApp({ page }: { page: MajazPage }) {
  useEffect(() => initMajaz(page), [page]);
  return null;
}
