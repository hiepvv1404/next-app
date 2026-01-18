export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="admin-layout container py-3">
      <h2>Admin panel</h2>
      {children}
    </div>
  );
}
