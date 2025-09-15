export default function Profile() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Professional Profile</h1>
      <div className="p-6 border rounded-lg shadow-md bg-white max-w-md">
        <h2 className="text-xl font-semibold">John Doe</h2>
        <p className="text-gray-600">Plumber with 10+ years of experience</p>
        <p className="text-yellow-600">⭐ 4.5</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Hire Now
        </button>
      </div>
    </main>
  );
}
