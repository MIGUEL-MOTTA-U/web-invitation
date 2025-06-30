import { Button, Card, CardBody, CardHeader } from "@heroui/react";
import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="flex flex-col items-center gap-4 pb-4">
          <div className="flex gap-4">
            <a href="https://vite.dev" target="_blank" rel="noopener">
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener">
              <img
                src={reactLogo}
                className="h-16 w-16 animate-spin"
                alt="React logo"
              />
            </a>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Vite + React + HeroUI
          </h1>
        </CardHeader>
        <CardBody className="text-center space-y-4">
          <Button
            color="primary"
            onClick={() => setCount((count) => count + 1)}
            className="font-medium"
          >
            Count is {count}
          </Button>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Edit{" "}
            <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">
              src/App.tsx
            </code>{" "}
            and save to test HMR
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </CardBody>
      </Card>
    </div>
  );
}

export default App;
