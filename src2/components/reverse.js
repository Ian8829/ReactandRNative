/*
Exports a generic function that changes
the state of a component, causing it to
re-render itself.
 */

export default function reverse() {
  this.setState(this.state.items.reverse())
}