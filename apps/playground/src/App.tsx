import { Button } from 'lame-ui'
import 'lame-ui/styles.css'

export function App() {
  return (
    <main className="page">
      <h1>lame-ui playground</h1>

      <section>
        <h2>Variants</h2>
        <div className="row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </section>

      <section>
        <h2>Sizes</h2>
        <div className="row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section>
        <h2>States</h2>
        <div className="row">
          <Button disabled>Disabled</Button>
          <Button onClick={() => alert('clicked')}>With handler</Button>
        </div>
      </section>
    </main>
  )
}
