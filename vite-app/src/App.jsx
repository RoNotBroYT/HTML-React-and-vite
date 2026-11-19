import { useState } from "react"
import { Moon, Sparkles, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>React in one HTML file</CardTitle>
          <CardDescription>
            Vite builds this app into a single <code>dist/index.html</code> you can open directly.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Button onClick={() => setCount((c) => c + 1)}>Count is {count}</Button>
            <Button variant="outline" onClick={() => setCount(0)}>
              Reset
            </Button>
          </div>
          <div className="flex gap-2 text-sm text-[var(--muted-foreground)]">
            <Sun className="size-4" aria-hidden /> <Moon className="size-4" aria-hidden />
            <span>Theme follows your system setting.</span>
          </div>
        </CardContent>
      </Card>
      <Button variant="ghost" size="sm" className="self-center">
        <Sparkles className="size-4" aria-hidden /> Replace this with your app
      </Button>
    </main>
  )
}
