import { Compass, RefreshCw, Settings, Heart } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Memorable Experiences",
    description: "Browse and book tours and activities so incredible.",
  },
  {
    icon: RefreshCw,
    title: "Ultimate Flexibility",
    description: "You're in control, with free cancellation and payment options.",
  },
  {
    icon: Settings,
    title: "Extended Customization",
    description: "Hand-tailor your tour until it fits your need.",
  },
  {
    icon: Heart,
    title: "Customer Satisfaction",
    description: "We deliver beyond your expectation.",
  },
];

export default function FeatureIcons() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <f.icon className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="text-sm text-gray-500">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
