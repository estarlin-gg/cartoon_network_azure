import { Prediction } from "../models";

interface ResultsProps {
  data: Prediction[];
}

export const Results = ({ data }: ResultsProps) => {
  const sortedData = [...data].sort((a, b) => b.probability - a.probability);
  const topPrediction = sortedData[0];

  return (
    <div className="w-full space-y-6">
      <h2 className="text-xl font-normal text-black md:text-2xl">
        El personaje con mayor probabilidad es:{" "}
        <span className="capitalize font-bold">{topPrediction?.tagName}</span>
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 w-full">
          <div className="w-full">
            <span className="font-semibold capitalize text-lg">
              {topPrediction.tagName}
            </span>
            <progress
              className="progress progress-info w-full"
              value={topPrediction.probability * 100}
              max="100"
            ></progress>
          </div>
          <span className="text-lg font-semibold">
            {(topPrediction.probability * 100).toFixed(2)}%
          </span>
        </div>
        <details className="collapse collapse-arrow border-2">
          <summary className="collapse-title text-xl font-medium">
            Ver demás comparaciones
          </summary>
          <div className="collapse-content">
            {data
              .filter((p) => topPrediction?.tagId !== p.tagId)
              .map((p) => (
                <div key={p.tagId} className="flex items-center gap-4 w-full">
                  <div className="w-full">
                    <span className="font-semibold capitalize text-lg">
                      {p.tagName}
                    </span>
                    <progress
                      className="progress progress-info w-full"
                      value={p.probability * 100}
                      max="100"
                    ></progress>
                  </div>
                  <span className="text-lg font-semibold">
                    {(p.probability * 100).toFixed(2)}%
                  </span>
                </div>
              ))}
          </div>
        </details>
      </div>
    </div>
  );
};
