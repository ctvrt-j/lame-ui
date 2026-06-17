import { useState } from 'react'
import { Button, Checkbox } from '@lamelabs/ui'
import '@lamelabs/ui/styles.css'

export function App() {
  const [checked, setChecked] = useState(false)

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

      <section>
        <h2>Checkbox sizes</h2>
        <div className="row">
          <label className="row"><Checkbox size="sm" defaultChecked /> Small</label>
          <label className="row"><Checkbox size="md" defaultChecked /> Medium</label>
          <label className="row"><Checkbox size="lg" defaultChecked /> Large</label>
        </div>
      </section>

      <section>
        <h2>Checkbox states</h2>
        <div className="row">
          <label className="row"><Checkbox /> Unchecked</label>
          <label className="row"><Checkbox defaultChecked /> Checked</label>
          <label className="row"><Checkbox indeterminate /> Indeterminate</label>
          <label className="row"><Checkbox invalid /> Invalid</label>
          <label className="row"><Checkbox disabled /> Disabled</label>
          <label className="row"><Checkbox disabled defaultChecked /> Disabled + checked</label>
        </div>
      </section>

      <section>
        <h2>Controlled</h2>
        <div className="row">
          <label className="row">
            <Checkbox
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            Toggle me ({checked ? 'on' : 'off'})
          </label>
        </div>
      </section>
    </main>
  )
}
