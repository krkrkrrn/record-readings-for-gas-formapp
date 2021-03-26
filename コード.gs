function test() {
  const sw = new SheetWrapper();
  console.log(sw.m_last_row.getValues());
  sw.m_last_row.setBackgroundRGB(255, 100, 100);
  const test_url = "https://iss.ndl.go.jp/api/opensearch?title=%e3%83%9e%e3%83%aa%e3%83%bc%e3%82%a2%e3%83%b3%e3%83%88%e3%83%af%e3%83%8d%e3%83%83%e3%83%88";
  const request = UrlFetchApp.fetch(test_url).getContentText("UTF-8");
  console.log(request);
}

// ---------------------------------------------------------------------
// class
class SheetWrapper {
  constructor() {
    this.m_sheet = SpreadsheetApp.getActiveSheet();
    this.m_last_row = this.m_sheet.getRange(
      this.m_sheet.getLastRow(), 1, 1, this.m_sheet.getLastColumn()
    );
  }
}

// ---------------------------------------------------------------------
function onFormSubmit() {
  test();
}