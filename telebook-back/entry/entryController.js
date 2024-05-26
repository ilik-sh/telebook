const createT13Form = require("../helpers/createT13Form");
const { getEntriesForEmployeeByMonth } = require("./entryRepository");

class EntryController {
  async getByMonth(req, res) {
    const { employeeId, month, year } = req.query;
    const entries = await getEntriesForEmployeeByMonth(employeeId, month, year);
    createT13Form(entries);
    return res.json(entries);
  }

  async getReport(req, res) {
    const { employeeId, month, year } = req.query;
    const entries = await getEntriesForEmployeeByMonth(employeeId, month, year);
    const blobForm = await createT13Form(entries);
    console.log(blobForm.type);
    res.type(blobForm.type);
    blobForm.arrayBuffer().then((buf) => {
      res.send(Buffer.from(buf));
    });
  }
}

module.exports = new EntryController();
