"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { debounce } from "../../utils/debounce";

const SearchForm = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const keyword = e.target.value.trim();
    const url = keyword ? `${pathname}?title=${keyword}` : pathname;
    router.push(url);
  });
  return (
    <input
      className="border p-2 rounded mb-4 w-full"
      type="search"
      placeholder="Search todos..."
      onChange={handleSearch}
      defaultValue={searchParam.get("title") || ""} // để khi xoá input thì giá trị searchParams cũng xoá theo
    />
  );
};

export default SearchForm;
