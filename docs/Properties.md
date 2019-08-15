### Properties

> Properties without _`Default Value`_ are required !

### Common Properties

| Name      | Type    | Default Value  | LRT Name       | LRT type |
| :-------- | :------ | :------------: | :------------- | :------- |
| name      | string  |  empty string  | Name           | string   |
| position  | vec3    |  [ 0, 0, 0 ]   | LocalPosition  | vec3     |
| rotation  | quat    | [ 0, 0, 0, 0 ] | LocalRotation  | quat     |
| scale     | vec3    |                | LocalScale     | vec3     |
| transform | mat4    |                | LocalTransform | mat4     |
| visible   | boolean |      true      | Visible        | boolean  |

### Common Properties for Ui elements

| Name      | Type    | Default Value | LRT Name  | LRT type        |
| :-------- | :------ | :-----------: | :-------- | :-------------- |
| alignment | string  |               | Alignment | lumin.Alignment |
| enabled   | boolean |               | Enabled   | boolean         |
