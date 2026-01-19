"use client";

import { usePathname, useRouter } from "next/navigation";

const FilterForm = () => {
  const path = usePathname();
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const status = formData.get("status") as string;
    const keyword = formData.get("keyword") as string;

    const params = new URLSearchParams();
    if (status) {
      params.append("status", status.toString());
    }
    if (keyword) {
      params.append("keyword", keyword.toString());
    }

    const queryString = params.toString();
    router.push(`${path}?${queryString}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="status">Status:</label>
      <select name="status">
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <label htmlFor="keyword">Keyword:</label>
      <input type="search" name="keyword" placeholder="Search..." />

      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default FilterForm;
