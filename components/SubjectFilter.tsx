"use client";

import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { subjects } from "@/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";

const SubjectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("subject") || "";

  // ✅ Always store a string
  const [subject, setSubject] = useState<string>("");

  useEffect(() => {
    let newUrl = "";

    if (!subject || subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject, // ✅ Now this is always a string
      });
    }

    router.push(newUrl, { scroll: false });
  }, [subject, router, searchParams]);

  return (
    <Select
  value={subject}
  onValueChange={(value) => {
    setSubject(value ?? "");
  }}
>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Subject" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="all">All subjects</SelectItem>

        {subjects.map((item) => (
          <SelectItem
            key={item}
            value={item}
            className="capitalize"
          >
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;