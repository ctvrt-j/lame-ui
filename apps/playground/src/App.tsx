import { useState } from 'react'
import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Grid,
  Heading,
  Input,
  Label,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Switch,
  Text,
  Textarea,
} from '@lamelabs/ui'
import '@lamelabs/ui/styles.css'

export function App() {
  const [checked, setChecked] = useState(false)
  const [flavor, setFlavor] = useState('vanilla')
  const [notifications, setNotifications] = useState(true)

  return (
    <main className="page">
      <h1>lame-ui playground</h1>

      <section>
        <h2>Button</h2>
        <div className="row">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="row">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="row">
          <Button disabled>Disabled</Button>
          <Button onClick={() => alert('clicked')}>With handler</Button>
        </div>
      </section>

      <section>
        <h2>Input</h2>
        <div className="row">
          <Input size="sm" placeholder="Small" />
          <Input size="md" placeholder="Medium" />
          <Input size="lg" placeholder="Large" />
        </div>
        <div className="row">
          <Input placeholder="Invalid" invalid />
          <Input placeholder="Disabled" disabled />
          <Input placeholder="Pill" radius="full" />
          <Input type="password" placeholder="Password" />
        </div>
      </section>

      <section>
        <h2>Textarea</h2>
        <div className="row">
          <Textarea placeholder="Default (vertical resize)" />
          <Textarea placeholder="No resize" resize="none" />
          <Textarea placeholder="Invalid" invalid />
          <Textarea placeholder="Disabled" disabled />
        </div>
      </section>

      <section>
        <h2>Label</h2>
        <Stack gap={1} align="start">
          <Label htmlFor="pg-email" required>Email</Label>
          <Input id="pg-email" type="email" placeholder="you@example.com" />
        </Stack>
        <div className="row">
          <Label size="sm">Small</Label>
          <Label size="md">Medium</Label>
          <Label size="lg">Large</Label>
          <Label disabled>Disabled</Label>
        </div>
      </section>

      <section>
        <h2>Checkbox</h2>
        <div className="row">
          <label className="row"><Checkbox size="sm" defaultChecked /> Small</label>
          <label className="row"><Checkbox size="md" defaultChecked /> Medium</label>
          <label className="row"><Checkbox size="lg" defaultChecked /> Large</label>
        </div>
        <div className="row">
          <label className="row"><Checkbox /> Unchecked</label>
          <label className="row"><Checkbox defaultChecked /> Checked</label>
          <label className="row"><Checkbox indeterminate /> Indeterminate</label>
          <label className="row"><Checkbox invalid /> Invalid</label>
          <label className="row"><Checkbox disabled /> Disabled</label>
          <label className="row"><Checkbox disabled defaultChecked /> Disabled + checked</label>
        </div>
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

      <section>
        <h2>Radio</h2>
        <RadioGroup className="row" value={flavor} onValueChange={setFlavor}>
          <label className="row"><Radio value="vanilla" /> Vanilla</label>
          <label className="row"><Radio value="chocolate" /> Chocolate</label>
          <label className="row"><Radio value="strawberry" /> Strawberry</label>
        </RadioGroup>
        <Text tone="muted">Selected: {flavor}</Text>
        <div className="row">
          <label className="row"><Radio name="radio-sm" size="sm" defaultChecked /> Small</label>
          <label className="row"><Radio name="radio-md" size="md" defaultChecked /> Medium</label>
          <label className="row"><Radio name="radio-lg" size="lg" defaultChecked /> Large</label>
        </div>
        <div className="row">
          <label className="row"><Radio name="radio-s1" invalid /> Invalid</label>
          <label className="row"><Radio name="radio-s2" disabled /> Disabled</label>
          <label className="row"><Radio name="radio-s3" disabled defaultChecked /> Disabled + checked</label>
        </div>
      </section>

      <section>
        <h2>Switch</h2>
        <div className="row">
          <label className="row"><Switch size="sm" defaultChecked /> Small</label>
          <label className="row"><Switch size="md" defaultChecked /> Medium</label>
          <label className="row"><Switch size="lg" defaultChecked /> Large</label>
        </div>
        <div className="row">
          <label className="row"><Switch invalid /> Invalid</label>
          <label className="row"><Switch disabled /> Disabled</label>
          <label className="row"><Switch disabled defaultChecked /> Disabled + on</label>
        </div>
        <div className="row">
          <label className="row">
            <Switch
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Notifications ({notifications ? 'on' : 'off'})
          </label>
        </div>
      </section>

      <section>
        <h2>Stack</h2>
        <Stack gap={2} align="start">
          <Button size="sm">First</Button>
          <Button size="sm" variant="secondary">Second</Button>
          <Button size="sm" variant="secondary">Third</Button>
        </Stack>
        <Stack direction="row" gap={4} align="center">
          <Badge>row</Badge>
          <Badge>with</Badge>
          <Badge>gap 4</Badge>
        </Stack>
      </section>

      <section>
        <h2>Grid</h2>
        <Grid columns={3} gap={3}>
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Card key={n} padding={3}>
              <Text>Cell {n}</Text>
            </Card>
          ))}
        </Grid>
      </section>

      <section>
        <h2>Box</h2>
        <Card padding={0}>
          <Box display="flex" padding={4} gap={2} align="center" justify="between">
            <Text weight="medium">Flex box</Text>
            <Badge tone="success">aligned</Badge>
          </Box>
        </Card>
      </section>

      <section>
        <h2>Text</h2>
        <Text size="sm">Small text</Text>
        <Text size="md">Medium text</Text>
        <Text size="lg">Large text</Text>
        <Text tone="muted">Muted tone</Text>
        <Text tone="danger">Danger tone</Text>
        <Text weight="medium">Medium weight</Text>
        <Text weight="bold">Bold weight</Text>
      </section>

      <section>
        <h2>Heading</h2>
        <Heading level={1} size="lg">Level 1, size lg</Heading>
        <Heading level={2} size="lg">Level 2, size lg (same look)</Heading>
        <Heading level={2} size="md">Level 2, size md</Heading>
        <Heading level={3} size="sm" tone="muted">Level 3, size sm, muted</Heading>
      </section>

      <section>
        <h2>Card</h2>
        <div className="row">
          <Card variant="outlined" padding={4}>
            <Heading level={3} size="md">Outlined</Heading>
            <Text tone="muted">Border, no shadow.</Text>
          </Card>
          <Card variant="elevated" padding={4}>
            <Heading level={3} size="md">Elevated</Heading>
            <Text tone="muted">Shadow, no border.</Text>
          </Card>
        </div>
      </section>

      <section>
        <h2>Paper</h2>
        <div className="row">
          {([0, 1, 2, 3] as const).map((e) => (
            <Paper key={e} elevation={e}>
              <Box padding={4}>
                <Text>Elevation {e}</Text>
              </Box>
            </Paper>
          ))}
        </div>
      </section>

      <section>
        <h2>Badge</h2>
        <div className="row">
          <Badge tone="neutral">Neutral</Badge>
          <Badge tone="success">Success</Badge>
          <Badge tone="warning">Warning</Badge>
          <Badge tone="danger">Danger</Badge>
          <Badge radius="sm">Square-ish</Badge>
        </div>
      </section>
    </main>
  )
}
