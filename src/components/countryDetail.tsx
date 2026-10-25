type CountryDetailProps = {
  code: string;
  onBack: () => void;
};

function CountryDetail({ code, onBack }: CountryDetailProps) {
  return (
    <div className="p-6">
      <button onClick={onBack} className="border px-4 py-2">
        Back
      </button>
      <p className="mt-6">Detail page for: {code}</p>
    </div>
  );
}

export default CountryDetail;