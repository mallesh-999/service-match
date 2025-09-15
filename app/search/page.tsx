const professionals = [
  { id: 1, name: "John Doe", service: "Plumber", rating: 4.5 },
  { id: 2, name: "Jane Smith", service: "Electrician", rating: 4.7 },
  { id: 3, name: "Sam Lee", service: "Software Developer", rating: 4.9 },
];

export default function Search() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Search Professionals</h1>
      <ul className="space-y-4">
        {professionals.map((pro) => (
          <li key={pro.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{pro.name}</h2>
            <p className="text-gray-600">{pro.service}</p>
            <p className="text-yellow-600">⭐ {pro.rating}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
