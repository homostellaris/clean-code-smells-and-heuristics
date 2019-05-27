---
code: G22
title: Make Logical Dependencies Physical
order: 22
---
If one module depends upon another, that dependency should be physical, not just logical.
The dependent module should not make assumptions (in other words, logical dependencies) about the module it depends upon.
Rather it should ask that module for all the information it depends upon.

For example, imagine that you are writing a function that prints a plain text report of hours worked by employees.
One class named `HourlyReporter` gathers all the data into a convenient form and then passes it to `HourlyReportFormatter` to print it.

```java
public class HourlyReporter {
  private HourlyReportFormatter formatter;
  private List<LineItem> page;
  private final int PAGE_SIZE = 55;

  public HourlyReporter(HourlyReportFormatter formatter) {
    this.formatter = formatter;
    page = new ArrayList<LineItem>();
  }

  public void generateReporter(List<HourlyEmployee> employees) {
    for (HourlyEmployee e : employees) {
      addLineItemToPage(e);
      if (page.size() == PAGE_SIZE) {
        printAndClearItemList();
      }
    }
    if (page.size() == 0)
      printAndClearItemList();
  }

  private void printAndClearItemList() {
    formatter.format(page);
    page.clear();
  }

  private void addLineItemToPage(HourlyEmployee e) {
    LineItem item = new LineItem();
    item.name = e.getName();
    item.hours = e.getTenthsWorked() / 10;
    item.tenths = e.getTenthsWorked() % 10;
    page.add(item);
  }

  private class LineItem {
    public String name;
    public int hours;
    public int tenths;
  }
}
```

This code has a logical dependency that has not been physicalized.
Can you spot it?
It is the constant `PAGE_SIZE`.
Why should the `HourlyReporter` know the size of the page?
Page size should be the responsibility of the `HourlyReportFormatter`.

The fact that PAGE_SIZE is declared in `HourlyReporter` represents a misplaced responsibility [\[G17\]]({% link _general/g17-misplaced-responsibility.md %}) that causes `HourlyReporter` to assume that it knows what the page size ought to be.
Such an assumption is a logical dependency.
`HourlyReporter` depends on the face that `HourlyReportFormatter` can deal with page sizes of 55.
If some implementation of `HourlyReportFormatter` could not deal with such sizes, then there would be an error.

We can physicalize this dependency by creating a new method in `HourlyReportFormatter` name `getMaxPageSize()`. `HourlyReporter` will then call that function rather than using the `PAGE_SIZE` constant.