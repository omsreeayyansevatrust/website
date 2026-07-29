"use client";

const activities = [
  {
    title: "New Project Created",
    time: "Today",
  },
  {
    title: "Event Updated",
    time: "Yesterday",
  },
  {
    title: "Gallery Added",
    time: "2 days ago",
  },
];

export default function ActivityTimeline() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="font-bold text-lg mb-6">
        Activity Timeline
      </h2>

      <div className="space-y-6">
        {activities.map((item) => (
          <div
            key={item.title}
            className="border-l-4 border-orange-500 pl-4"
          >
            <h3 className="font-semibold">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}