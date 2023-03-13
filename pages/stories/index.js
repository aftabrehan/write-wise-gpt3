import Link from 'next/link'

import stl from './Stories.module.scss'

const StoriesLinks = () => (
  <div className={stl.wrapper}>
    <h3>Stories of Components</h3>
    <Link href="/stories/button">Button</Link>
    <Link href="/stories/modal">Modal</Link>
    <Link href="/stories/dialog">Dialog</Link>
    <Link href="/stories/field">Field</Link>
    <Link href="/stories/text-area">Text Area</Link>
    <Link href="/stories/checkbox">CheckBox</Link>
  </div>
)

export default StoriesLinks
