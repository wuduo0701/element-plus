---
title: Select 选择器
lang: zh-CN
---

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

:::demo 适用广泛的基础单选 `v-model` 的值为当前被选中的 `el-option` 的 value 属性值

select/basic-usage

:::

## 有禁用选项

:::demo 在 `el-option` 中，设定 `disabled` 值为 true，即可禁用该选项

select/disabled-option

:::

## 禁用状态

禁用整个选择器组件

:::demo 为 `el-select` 设置 `disabled`属性，则整个选择器不可用。

select/disabled

:::

## 可清空单选

包含清空按钮，可将选择器清空为初始状态

:::demo 为 `el-select` 设置 `clearable` 属性，则可将选择器清空。 需要注意的是，`clearable` 属性仅适用于单选。

select/clearable

:::

## 基础多选

适用性较广的基础多选，用 Tag 展示已选项

:::demo 为 `el-select` 设置 `multiple` 属性即可启用多选， 此时 `v-model` 的值为当前选中值所组成的数组。 默认情况下选中值会以 Tag 的形式展现， 你也可以设置 `collapse-tags` 属性将它们合并为一段文字。

select/multiple

:::

## 自定义模板

你可以自定义单个选项怎么被渲染

:::demo 将自定义的 HTML 模板插入 `el-option` 的 slot 中即可。

select/custom-template

:::

## 将选项进行分组

你可以为选项进行分组来区分不同的选项

:::demo 使用 `el-option-group` 对备选项进行分组，它的 `label` 属性为分组名

select/grouping

:::

## 筛选选项

可以利用筛选功能快速查找选项

:::demo 为 `el-select` 添加 `filterable` 属性即可启用筛选功能。 默认情况下，Select 会找出所有 `label` 属性包含输入值的选项。 如果希望使用其他的搜索逻辑，可以通过传入一个 `filter-method` 来实现。 `filter-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。

select/filterable

:::

## 远程搜索

通过输入关键字在服务器上来搜索数据

:::demo 为了启用远程搜索，需要将 `filterable` 和`remote` 设置为 `true`，同时传入一个 `remote-method`。 `remote-method` 为一个 `Function`，它会在输入值发生变化时调用，参数为当前输入值。 需要注意的是，如果 `el-option` 是通过 `v-for` 指令渲染出来的，此时需要为 `el-option` 添加 `key` 属性， 且其值需具有唯一性，比如这个例子中的 `item.value`。

select/remote-search

:::

## 创建新的选项

可以创建并选中选项中不存在的条目

:::demo 通过使用 `allow-create` 属性，用户可以通过输入框创建新项目。 为了使 `allow-create` 正确的工作， `filterable` 的值必须为 `true`. 本例还使用了 `default-first-option` 属性， 在该属性打开的情况下，按下回车就可以选中当前选项列表中的第一个选项，无需使用鼠标或键盘方向键进行定位。

select/allow-create

:::

:::tip

如果 Select 的绑定值为对象类型，请务必指定 `value-key` 作为它的唯一性标识。

:::

## Select 属性

| 属性                              | 说明                                                                                                                        | 类型                               | 可选值                      | 默认值           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------- | ---------------- |
| model-value / v-model             | 选中项绑定值                                                                                                                | string / number / boolean / object | —                           | —                |
| multiple                          | 是否多选                                                                                                                    | boolean                            | —                           | false            |
| disabled                          | 是否禁用                                                                                                                    | boolean                            | —                           | false            |
| value-key                         | 作为 value 唯一标识的键名，绑定值为对象类型时必填                                                                           | string                             | —                           | value            |
| size                              | 输入框尺寸                                                                                                                  | string                             | large/default/small         | default          |
| clearable                         | 是否可以清空选项                                                                                                            | boolean                            | —                           | false            |
| collapse-tags                     | 多选时是否将选中值按文字的形式展示                                                                                          | boolean                            | —                           | false            |
| multiple-limit                    | 多选时用户最多可以选择的项目数， 为 0 则不限制                                                                              | number                             | —                           | 0                |
| name                              | 多选框的输入框的原生 name 属性                                                                                              | string                             | —                           | —                |
| effect                            | Tooltip theme, built-in theme: `dark` / `light`                                                                             | string                             | string                      | light            |
| autocomplete                      | the autocomplete attribute of select input                                                                                  | string                             | —                           | off              |
| placeholder                       | placeholder                                                                                                                 | string                             | —                           | Select           |
| filterable                        | whether Select is filterable                                                                                                | boolean                            | —                           | false            |
| allow-create                      | whether creating new items is allowed. To use this, `filterable` must be true                                               | boolean                            | —                           | false            |
| filter-method                     | custom filter method                                                                                                        | function                           | —                           | —                |
| remote                            | whether options are loaded from server                                                                                      | boolean                            | —                           | false            |
| remote-method                     | custom remote search method                                                                                                 | function                           | —                           | —                |
| loading                           | whether Select is loading data from server                                                                                  | boolean                            | —                           | false            |
| loading-text                      | displayed text while loading data from server                                                                               | string                             | —                           | Loading          |
| no-match-text                     | displayed text when no data matches the filtering query, you can also use slot `empty`                                      | string                             | —                           | No matching data |
| no-data-text                      | displayed text when there is no options, you can also use slot `empty`                                                      | string                             | —                           | No data          |
| popper-class                      | custom class name for Select's dropdown                                                                                     | string                             | —                           | —                |
| reserve-keyword                   | when `multiple` and `filter` is true, whether to reserve current keyword after selecting an option                          | boolean                            | —                           | true             |
| default-first-option              | select first matching option on enter key. Use with `filterable` or `remote`                                                | boolean                            | -                           | false            |
| popper-append-to-body(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false | boolean                            | -                           | true             |
| teleported                        | whether select dropdown is teleported to the body                                                                           | boolean                            | true / false                | true             |
| automatic-dropdown                | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                           | boolean                            | -                           | false            |
| clear-icon                        | Custom clear icon component                                                                                                 | string / Component                 | —                           | CircleClose      |
| fit-input-width                   | whether the width of the dropdown is the same as the input                                                                  | boolean                            | —                           | false            |
| suffix-icon                       | Custom suffix icon component                                                                                                | string / Component                 | —                           | ArrowUp          |
| tag-type                          | tag type                                                                                                                    | string                             | success/info/warning/danger | info             |

## Select 事件

| 事件名         | 说明                                     | 回调参数                           |
| -------------- | ---------------------------------------- | ---------------------------------- |
| change         | 选中值发生变化时触发                     | val，目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | val，出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | val，移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                                  |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                     |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                     |

## Select 插槽

| 插槽名 | 说明                | 子标签                |
| ------ | ------------------- | --------------------- |
| —      | Option 组件列表     | Option Group / Option |
| prefix | Select 组件头部内容 | —                     |
| empty  | 无选项时的列表      | —                     |

## Option Group 属性

| 属性     | 说明                           | 类型    | 可选值 | 默认值 |
| -------- | ------------------------------ | ------- | ------ | ------ |
| label    | 分组的组名                     | string  | —      | —      |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | —      | false  |

## Option Group 插槽

| 插槽名 | 说明           | 子标签 |
| ------ | -------------- | ------ |
| -      | 自定义默认内容 | Option |

## Option 属性

| 属性     | 说明                                    | 类型                               | 可选值 | 默认值 |
| -------- | --------------------------------------- | ---------------------------------- | ------ | ------ |
| value    | 选项的值                                | string / number / boolean / object | —      | —      |
| label    | 选项的标签，若不设置则默认与`value`相同 | string/number                      | —      | —      |
| disabled | 是否禁用该选项                          | boolean                            | —      | false  |

## Option 插槽

| 插槽名 | 说明     |
| ------ | -------- |
| —      | 默认插槽 |

## Select 方法

| 方法名 | 说明                                   | 参数 |
| ------ | -------------------------------------- | ---- |
| focus  | 使选择器的输入框获取焦点               | -    |
| blur   | 使选择器的输入框失去焦点，并隐藏下拉框 | -    |
