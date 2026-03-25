import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

const plans = [
  {
    name: "Insta Gold®",
    price: "6.00$",
    period: "/month",
    description:
      "Entry-level package with more capability than many competitors’ “full-function” systems.",
    features: [
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "Branded mobile apps for agents, installers, and administrators",
      "Basic analytics dashboard",
      "Email support",
      "1 team member",
    ],
    cta: "Get Basic ",
  },
  {
    name: "Insta Platinum®",
    price: "$79",
    period: "/month",
    description:
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
    features: [
      "7,000 AI credits/month for creating images, videos, audio, and other generations",
      "Advanced analytics",
      "Priority support",
      "Mobile app access",
      "5 team members",
      "API access",
    ],
    cta: "Get Basic ",
  },
  {
    name: "Insta Diamond®",
    price: "$196.00",
    period: "",
    description:
      "Advanced solution for high-volume operations requiring priority support, advanced APIs, and enterprise-level functionality.",
    features: [
      "Unlimited sign trackers",
      "Custom analytics",
      "24/7 phone support",
      "Mobile app access",
      "Unlimited team members",
      "Full API access",
      "Custom integrations",
    ],
    cta: "Get Basic ",
  },
];

export default function Subscription() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 font-opensans md:mt-12">
      <div className="text-center mb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-black/80">
          Solutions for Every Type of Business <br />
          <span className="text-primary">Sign Installation</span> Companies
        </h1>
        <p className="text-xl text-black/60 max-w-2xl mx-auto">
          Choose from three licensing options, all including branded apps for
          agents, installers, and administrators:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className="bg-white h-full flex flex-col p-5 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold mb-3 text-black/80">
                {plan.name}
              </CardTitle>
              <CardDescription className="text-black/60">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
              <div>
                <h1 className="text-lg font-semibold text-black/80">
                  AI Suite with:
                </h1>
                <ul className="space-y-3 mt-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-black/70"
                    >
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-baseline gap-1 mt-6">
                  <span className="text-4xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-black/60">{plan.period}</span>
                </div>
              </div>
              <Link href="/signup">
                <button
                  className="w-full mt-6  bg-primary  text-white px-8 py-3 text-lg rounded-md flex items-center justify-center gap-2 cursor-pointer"
                  type="button"
                >
                  {plan.cta}
                  <ArrowRight />
                </button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
