export default function FormError({ error }: { error: string | null }) {
  return (
    <>
      <h2 className="font-serif mb-6">Error {error}</h2>
      <p>
        We encountered an error when trying to submit your form. Please try
        again.
      </p>
    </>
  );
}
