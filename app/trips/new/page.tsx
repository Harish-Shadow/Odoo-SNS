import CreateTripForm from "@/public/components/trips/CreateTripForm";

export default function NewTripPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Create Trip</h1>
      <CreateTripForm />
    </div>
  );
}
