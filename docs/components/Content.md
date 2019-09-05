---
id: content
title: Content
---

## Tag: `<Content>`

- #### Lumin Runtime native component - TransformNode

## [Common Events](../types/Events.md)

## [Common Properties](../types/Properties.md)

## Create Properties

| Name            | Type   |    Default Value     | Description                             |
| --------------- | ------ | :------------------: | --------------------------------------- |
| localTransform  |  mat4  | 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1 | The local transform of the new node. Use glm::mat4() for the identity matrix. |

### Purpose:
Some components need to wrap their children in `<content>` tag.
Example:
```javascript
<ScrollView>
    <ScrollBar />
    <Content>
        <Text>Message Box</Text>
        <Button>Submit</Button>
    </Content>
</ScrollView>
```
