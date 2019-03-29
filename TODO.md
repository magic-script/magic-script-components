# Implementation order for the MagicScript Components

## Phase 1:

Order | Component | Lumin RT | Implemented | Tested
------|-----------|----------|-------------|-------
 1 | view | UiNode | :thumbsup:
 2 | text | UiText | :thumbsup:
 3 | button | UiButton | :thumbsup:
 4 | image | UiImage | :thumbsup:
 5 | textEdit | UiTextEdit | :thumbsup:
 6 | scrollBar | UiScrollBar | :thumbsup:
 7 | scrollView | UiScrollView | :thumbsup:
 8 | listView | UiListView | :thumbsup:
 9 | listViewItem | UiListViewItem | :thumbsup:
10 | model | ModelNode | :thumbsup:

### Additional tasks:
1. Add layout system to resemble flex-box (yoga style)
2. Extract in npm package
3. Select cmp = select('key'); cmp.setPropX(value); - Double check if we really need this
---


## Phase 2:

Order | Component | Lumin RT | Implemented | Tested
------|-----------|----------|-------------|-------
11 | slider | UiSlider |
12 | loadingSpinner | UiLoadingSpinner |
13 | progressBar | UiProgressBar |
14 | group | UiGroup |
15 | gridLayout | UiGridLayout |
16 | layout | UiLayout |
17 | linearLayout | UiLinearLayout |
18 | rectLayout | UiRectLayout |
19 | dropdownList | UiDropDownList |
20 | toggle | UiToggle |
21 | toggleGroup | UiToggleGroup |
22 | panel | UiPanel |
23 | video | VideoNode |
24 | audio | AudioNode |
---

## Phase 3:

Order | Component | Lumin RT | Implemented | Tested
------|-----------|----------|-------------|-------
24 | pageView | UiPageView |
25 | circleConfirmation | UiCircleConfirmation |
26 | portalIcon | UiPortalIcon |
27 | colorPicker | UiColorPicker |
28 | timePicker | UiTimePicker |
29 | datePicker | UiDatePicker |
30 | dialog | UiDialog |
31 | tab | UiTab |
32 | webView | UiWebView |
---
