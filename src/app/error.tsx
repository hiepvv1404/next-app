"use client";
// cos the dua vao bat ki module nao de chi lay  error cho module do hoac toan bo app neu dua ra ngoai cung
// layout cua error se chiu layout cua folder dat error
const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest: string };
  reset: () => void;
}) => {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
