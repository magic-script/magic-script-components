---
id: quality
title: Quality
---

## Quality options

| Value       | Description                                                                                  |
| :---------- | :------------------------------------------------------------------------------------------- |
| `enh1`      | Enhanced lvl 1 text, which uses preconditioned font data.                                    |
| `enh1-aa`   | Uses same data as kEnh1 but applies extra anti-aliasing; slower than kEnh1.                  |
| `enh1-fast` | Uses the same data as kEnh1 with a less accurate but faster shader.                          |
| `enh2`      | Enhanced lvl 2 text, which uses different preconditioned data than kEnh1.                    |
| `enh3`      |                                                                                              |
| `exper`     | Like kStd, but still in development. Experimental -- never for production use.               |
| `fast`      | Fastest rendering, but the text quality is unacceptable for most use cases.                  |
| `std`       | Standard quality, which is ideal for on-the-fly font loading.                                |
| `std-0`     | N.B. these are still in development and deprecated; prefer kStd except for testing purposes. |
