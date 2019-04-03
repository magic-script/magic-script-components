# Implementation order for the MagicScript Components

## Phase 1:

Order | Component | Lumin RT | Implemented | Tested
------|-----------|----------|-------------|-------
 1 | view | UiNode | :thumbsup:
 2 | text | UiText | :thumbsup:
 3 | textEdit | UiTextEdit | :thumbsup:
 4 | button | UiButton | :thumbsup:
 5 | image | UiImage | :thumbsup:
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
11 | spinner | UiLoadingSpinner | :thumbsup:
12 | slider | UiSlider | :thumbsup:
13 | progressBar | UiProgressBar | :thumbsup:
14 | gridLayout | UiGridLayout | :thumbsup:
15 | linearLayout | UiLinearLayout | :thumbsup:
16 | rectLayout | UiRectLayout | :thumbsup:
17 | dropdownList | UiDropDownList | :thumbsup:
18 | dropdownListItem | DropDownListItem | :thumbsup:
19 | toggle | UiToggle | :thumbsup:
20 | toggleGroup | UiToggleGroup | :thumbsup:
21 | panel | UiPanel | :thumbsup:
22 | video | VideoNode | :thumbsup:
23 | audio | AudioNode | :thumbsup:
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
30 | dialog | UiDialog | :thumbsup:
31 | tab | UiTab | :thumbsup:
32 | webView | UiWebView |
---
