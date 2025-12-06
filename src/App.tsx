import React, { useEffect, useState } from "react";
import { Button, Card, Input, LayoutShell, Select, SimpleTable } from "./components";
import { ExampleTodo, fetchExampleTodos } from "./lib";

const cityOptions = [
  { label: "Montreal", value: "montreal" },
  { label: "Toronto", value: "toronto" },
  { label: "Quebec City", value: "quebec" },
];

function App() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("montreal");
  const [todos, setTodos] = useState<ExampleTodo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await fetchExampleTodos();
        setTodos(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <LayoutShell>
      <div className="grid gap-4 md:grid-cols-3">
        <Card title="Form elements">
          <div className="space-y-3">
            <Input
              label="Name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              options={cityOptions}
            />
            <Button onClick={() => alert(`Hello ${name || "friend"} in ${city}!`)}>
              Submit
            </Button>
          </div>
        </Card>

        <Card title="Buttons">
          <div className="flex flex-wrap gap-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
        </Card>

        <Card title="API status">
          {loading ? (
            <p className="text-sm text-slate-500">Loading sample data…</p>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Loaded {todos.length} items from the demo API.
            </p>
          )}
        </Card>
      </div>

      <Card title="Example table">
        <SimpleTable
          columns={[
            { key: "id", header: "ID" },
            { key: "todo", header: "Todo" },
            { key: "completed", header: "Done?" },
          ]}
          data={todos}
        />
      </Card>
    </LayoutShell>
  );
}

export default App;
