export default function TeacherSidebar() {
  return (
    <div className="w-64 bg-blue-900 text-white min-h-screen p-6">
      <h2 className="text-xl font-bold mb-8">
        EduTrack
        <span className="block text-sm font-light">Teacher Portal</span>
      </h2>

      <ul className="space-y-4">
        <li className="bg-teal-500 px-4 py-2 rounded-lg">Dashboard</li>
        <li className="hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer">My Classes</li>
        <li className="hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer">Assignments</li>
        <li className="hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer">Submissions</li>
        <li className="hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer">Performance</li>
        <li className="hover:bg-blue-800 px-4 py-2 rounded-lg cursor-pointer">Settings</li>
      </ul>
    </div>
  );
}