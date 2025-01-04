import React from "react";
import StatCard from "../../components/StatCard";

export default function Dashboard() {
  return (
    <main className="px-4 py-10">
      <h2 className="text-4xl font-light mb-10">Hi, Amal</h2>
      <div className="equityCommodityCards flex flex-col gap-6">
        <StatCard
          title="Equity"
          marginValue="20,000"
          marginUsed="0.2"
          openingBalance="20"
        />
        <StatCard
          title="Commodity"
          marginValue="56,000"
          marginUsed="0.2"
          openingBalance="18"
        />
      </div>
    </main>
  );
}
