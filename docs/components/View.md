---
id: view
title: View
---

import PlatformTabs from '@theme/PlatformTabs';

<PlatformTabs component='view' />​

## Description

A View collects node children, aggregates specific events of all children, and rebroadcasts the aggregated events. When a UI element within a View broadcasts an event, two events are sent: the first one from the child and the second one from the group. Use View if you want to trigger event logic when a child node broadcasts an event, or if you want to know an event occurred within the group.

## Example

```javascript
<View />
```

## [Common Events](../events/CommonEvents.md)

## [Common Properties](../types/Properties.md)

## Create Properties

N/A

## Element Properties

N/A
