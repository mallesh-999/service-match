export default function Dashboard() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Dashboard</h1>
      <div className="p-6 border rounded-lg shadow bg-white max-w-md">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <ul className="list-disc ml-6 mt-2 text-gray-700">
          <li>Hired John Doe (Plumber)</li>
          <li>Scheduled appointment with Jane Smith (Electrician)</li>
        </ul>
      </div>
    </main>
  );
}
