export default function StatCard(props) {
  return (
    <div className="statCard flex flex-col gap-6 bg-gray-100 px-4 py-4 rounded-lg">
      <div className="title flex gap-2 items-center">
        <i class="bi bi-pie-chart"></i>
        <h3>{props.title}</h3>
      </div>
      <div className="container flex justify-between items-center">
        <div className="marginAvailable flex flex-col gap-1">
          <h2 className="text-4xl font-light">{props.marginValue}</h2>
          <p className="text-xs text-gray-500">Margin Available</p>
        </div>
        <div className="openingBalance flex flex-col gap-2 ml-4">
          <p className="text-xs text-gray-500">
            Margin Used {props.marginUsed}
          </p>
          <p className="text-xs text-gray-500">
            Opening Balance {props.openingBalance}
          </p>
        </div>
      </div>
    </div>
  );
}
