---
title: Dialog 对话框
lang: zh-CN
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。 Dialog 分为两个部分：`body` 和 `footer`，`footer` 需要具名为 `footer` 的 `slot`。 `title` 属性用于定义标题，它是可选的，默认值为空。 最后，本例还展示了 `before-close` 的用法。

dialog/basic-usage

:::

:::tip

`before-close` 只会在用户点击关闭按钮或者对话框的遮罩区域时被调用。 如果你在 `footer` 具名插槽里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。

:::

## Focus trapping

Dialog traps focus inside the dialog content which enables your users to navigate the content via keyboard.

:::tip

Focusing on other element after the dialog is closed will only work when `destroy-on-close` is enabled

:::

:::demo

dialog/focus-trapping

:::

## Customizations

The content of Dialog can be anything, even a table or a form. This example shows how to use Element Plus Table and Form with Dialog。

:::demo

dialog/customizations

:::

## Nested Dialog

If a Dialog is nested in another Dialog, `append-to-body` is required.

:::demo Normally we do not recommend using nested Dialog. If you need multiple Dialogs rendered on the page, you can simply flat them so that they're siblings to each other. If you must nest a Dialog inside another Dialog, set `append-to-body` of the nested Dialog to true, and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.

dialog/nested-dialog

:::

## Centered content

Dialog's content can be centered.

:::demo Setting `center` to `true` will center dialog's header and footer horizontally. `center` only affects Dialog's header and footer. The body of Dialog can be anything, so sometimes it may not look good when centered. You need to write some CSS if you wish to center the body as well.

dialog/centered-content

:::

:::tip

The content of Dialog is lazily rendered, which means the default slot is not rendered onto the DOM until it is firstly opened. Therefore, if you need to perform a DOM manipulation or access a component using `ref`, do it in the `open` event callback.

:::

## Destroy on Close

When this is feature is enabled, the content under default slot will be destroyed with a `v-if` directive. Enable this when you have perf concerns.

:::demo Note that by enabling this feature, the content will not be rendered before `transition.beforeEnter` dispatched, there will only be `overlay` `header(if any)` `footer(if any)`.

dialog/destroy-on-close

:::

## Draggable Dialog

Try to drag the `header` part.

:::demo Set `draggable` to `true` to drag.

dialog/draggable-dialog

:::

:::tip

When using `modal` = false, please make sure that `append-to-body` was set to **true**, because `Dialog` was positioned by `position: relative`, when `modal` gets removed, `Dialog` will position itself based on the current position in the DOM, instead of `Document.Body`, thus the style will be messed up.

:::

## Attributes

| 属性                  | 说明                                                                          | 类型                                 | 可选值 | 默认值 |
| --------------------- | ----------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| model-value / v-model | 是否显示 Dialog                                                               | boolean                              | —      | —      |
| title                 | Dialog 对话框 Dialog 的标题， 也可通过具名 slot （见下表）传入                | string                               | —      | —      |
| width                 | Dialog 的宽度                                                                 | string / number                      | —      | 50%    |
| fullscreen            | 是否为全屏 Dialog                                                             | boolean                              | —      | false  |
| top                   | Dialog CSS 中的 margin-top 值                                                 | string                               | —      | 15vh   |
| modal                 | 是否需要遮罩层                                                                | boolean                              | —      | true   |
| append-to-body        | Dialog 自身是否插入至 body 元素上。 嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| lock-scroll           | 是否在 Dialog 出现时将 body 滚动锁定                                          | boolean                              | —      | true   |
| custom-class          | Dialog 的自定义类名                                                           | string                               | —      | —      |
| open-delay            | Dialog 打开的延时时间，单位毫秒                                               | number                               | —      | 0      |
| close-delay           | Dialog 关闭的延时时间，单位毫秒                                               | number                               | —      | 0      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Dialog                                            | boolean                              | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog                                              | boolean                              | —      | true   |
| show-close            | 是否显示关闭按钮                                                              | boolean                              | —      | true   |
| before-close          | 关闭前的回调，会暂停 Dialog 的关闭                                            | function(done)，done 用于关闭 Dialog | —      | —      |
| draggable             | 为 Dialog 启用可拖拽功能                                                      | boolean                              | —      | false  |
| center                | 是否让 Dialog 的 header 和 footer 部分居中排列                                | boolean                              | —      | false  |
| destroy-on-close      | 当关闭 Dialog 时，销毁其中的元素                                              | boolean                              | —      | false  |

## Slots

| 插槽名 | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

## Events

| 事件名           | 说明                                             | 参数 |
| ---------------- | ------------------------------------------------ | ---- |
| open             | Dialog 打开的回调                                | —    |
| opened           | Dialog 打开动画结束时的回调                      | —    |
| close            | Dialog 关闭的回调                                | —    |
| closed           | Dialog 关闭动画结束时的回调                      | —    |
| open-auto-focus  | triggers after Dialog opens and content focused  | —    |
| close-auto-focus | triggers after Dialog closed and content focused | —    |
